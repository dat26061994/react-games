import React, { useState } from 'react';

import { createStage, checkCollision } from '../../helpers/gameHelpers'
import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { useGameStatus } from '../../hooks/useGameStatus';
import { useInterval } from '../../hooks/useInterval';

import Stage from '../../components/tetris/Stage';
import Display from '../../components/tetris/Display';
import StartButton from '../../components/tetris/StartButton';
import ReturnHome from '../../components/tetris/ReturnHome';
import {TetrisWrapper} from './Styled';

const Tetris = () => {

    const [dropTime, setDropTime] = useState<any>(null);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [isStart, setIsStart] = useState<boolean>(false);

    const [player, resetPlayer, updatePlayerPos , playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer) as any;
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
        rowsCleared
    );

    const movePlayer = (dir: any) => {
        if (!checkCollision(player, stage, { moveX: dir, moveY: 0 })) {
            updatePlayerPos(dir, 0, false);
        }
    }

    const keyUp = (keyCode: any) => {
        if (!gameOver) {
          // Activate the interval again when user releases down arrow.
          if (keyCode === 40) {
            let dropTime = 1000 / (+level + 1);
            setDropTime(dropTime);
          }
        }
    };

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0);
        setGameOver(false);
        setIsStart(true);
    }

    const dropPlayer = () => {
        // setDropTime(null);
        drop();
    }

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (+level + 1) + 200);
        }
    
        if (!checkCollision(player, stage, { moveX: 0, moveY: 1 })) {
            updatePlayerPos(0, 1, false);
        } else {
            // Game over!
            if (player.pos.y < 1) {
                console.log('GAME OVER!!!');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos(0, 0, true);
        }
    }

    const move = (e: any) => {
        const { keyCode } = e;
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1)
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    }

    // This one starts the game
    // Custom hook by Dan Abramov
    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <TetrisWrapper
            role='button'
            tabIndex='0'
            onKeyDown={(e: any) => move(e)}
            onKeyUp={keyUp}
        >
            <div className="tetris-container">
                <Stage stage={stage} />

                <aside>
                    { gameOver ?
                        (<Display text="Game Over" gameOver={gameOver} />) :
                        (<div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>)
                    }
                    <StartButton callback={startGame} text={gameOver ? 'Start Again' : isStart ? 'Restart' : 'Start Game'} />

                    <ReturnHome />
                </aside>
            </div>
        </TetrisWrapper>
    );
}

export default Tetris;