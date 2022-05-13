import { useState, useEffect } from "react";
import { createStage } from '../helpers/gameHelpers';

export const useStage = (player: any, resetPlayer: any) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {

        setRowsCleared(0);
        const sweepRows = (newStage: any) =>
            newStage.reduce((ack: any, row: any) => {
                if (row.findIndex((cell: any) => cell[0] === 0) === -1) {
                    setRowsCleared((prev: any) => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
        }, []);

        const updateStage = (prevStage: any) => {
            // First flush the stage
            const newStage = prevStage?.map((row:any) =>
              row.map((cell: any) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );
      
            // // Then draw the tetromino
            player.tetromino.forEach((row: any, y: any) => {
              row.forEach((value: any, x: any) => {
                if (value !== 0 && player && player.pos && newStage && newStage[y + player.pos.y] && newStage[y + player.pos.y].length) {
                  newStage[y + player.pos.y][x + player.pos.x] = [
                    value,
                    `${player.collided ? 'merged' : 'clear'}`,
                  ];
                }
              });
            });
            // // Then check if we got some score if collided
            if (player.collided) {
              resetPlayer();
              return sweepRows(newStage);
            }
            return newStage;
        };

        setStage(prev => updateStage(prev));

    }, [
      player.collided,
      player.pos.x,
      player.pos.y,
      player.tetromino,
      resetPlayer,
    ])

    return [stage, setStage, rowsCleared] as const;
}