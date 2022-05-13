import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from '../helpers/tetrominos';
import { STAGE_WIDTH, checkCollision } from '../helpers/gameHelpers';
import { IPlayer } from '../interface/tetris/IPlayer'

export const usePlayer = () => {

    const [player, setPlayer] = useState<IPlayer>(
        {
            pos: {
                x: 0,
                y: 0,
            },
            tetromino: randomTetromino().shape,
            collided: false,
        }
    );

    function rotate(matrix: any, dir: any) {
        // Make the rows to become cols (transpose)
        const mtrx = matrix.map((_: any, index: any) => matrix.map((column: any) => column[index]));
        // Reverse each row to get a rotaded matrix
        if (dir > 0) return mtrx.map((row: any) => row.reverse());
        return mtrx.reverse();
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
          pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
          tetromino: randomTetromino().shape,
          collided: false,
        });
    }, []);

    const updatePlayerPos = (x: any, y: any, collided: boolean) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided: typeof collided != "undefined" ? collided : player.collided
        }));
    }

    function playerRotate(stage: any, dir: any) {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
    
        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while (checkCollision(clonedPlayer, stage, { moveX: 0, moveY: 0 })) {
          clonedPlayer.pos.x += offset;
          offset = -(offset + (offset > 0 ? 1 : -1));
          if (offset > clonedPlayer.tetromino[0].length) {
            rotate(clonedPlayer.tetromino, -dir);
            clonedPlayer.pos.x = pos;
            return;
          }
        }
        setPlayer(clonedPlayer);
    }

    return [player, resetPlayer, updatePlayerPos, playerRotate] as const;

}