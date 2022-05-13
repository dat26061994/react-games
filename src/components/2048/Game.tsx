import React, { useContext, useEffect, useState } from "react";
import { GameProvider } from './Styled'
import {
    GameContextActionType,
    GameState,
    IGameContext,
    Direction,
    Tile,
    GameStatus
} from "../../interface/2048/I2048";
import {
  getEmptyBoard,
  generateRandom,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  isOver,
  checkWin
} from "../../helpers/2048Helpers";
import Cell from "../../components/2048/Cell";

const GameContext = React.createContext<any>(null);

const Game = () => {

  const [board, updateBoard] = useState(generateRandom(getEmptyBoard()));
  const [gameState, setGameState] = useState({
    score: 0,
    won: false,
  });
  const [bestScore, setBestScore] = useState(parseInt(localStorage?.getItem('bestScore') || '0'));

  const onNewGame = () => {
    updateBoard(generateRandom(getEmptyBoard()));
    setGameState({
      score: 0,
      won: false,
    });
  }

  const checkEndGame = () => {
    if (checkWin(board)) {
      console.log("You win!");
    } else if (isOver(board)) {
      console.log("Game over!");
    }
  };

  const updateGameState = (score: number) => {
    let state = {
      score: gameState.score + score,
      won: checkWin(board),
    }
    setGameState(state);
    setTimeout(() => {
      localStorage.setItem('gameState', JSON.stringify(state));
    }, 0);

    if (!bestScore || (bestScore && bestScore < state.score)) {
      setBestScore(state.score);
      localStorage.setItem('bestScore', JSON.stringify(state.score));
    }
    
  }

  const left = () => {
    const newBoard = moveLeft(board, 'move');
    updateBoard(generateRandom(newBoard.board));
    updateGameState(newBoard.point);
  };

  const right = () => {
    const newBoard = moveRight(board, 'move');
    updateBoard(generateRandom(newBoard.board));
    updateGameState(newBoard.point);
  };

  const up = () => {
    const newBoard = moveUp(board, 'move');
    updateBoard(generateRandom(newBoard.board));
    updateGameState(newBoard.point);
  };

  const down = () => {
    const newBoard = moveDown(board, 'move');
    updateBoard(generateRandom(newBoard.board));
    updateGameState(newBoard.point);
  };

  const onKeyDown = (e: any) => {
    switch (e.key) {
      case "ArrowLeft":
        left();
        break;
      case "ArrowRight":
        right();
        break;
      case "ArrowUp":
        up();
        break;
      case "ArrowDown":
        down();
        break;

      default:
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <GameProvider>

      <div className="flex items-center justify-between">
        <h1 className="title">2048</h1>
        <div className="scores-container">
          <div className="score-container">{gameState.score}</div>
          <div className="best-container">{bestScore}</div>
        </div>
      </div>

      <div className="above-game flex items-center justify-between my-3">
        <div className="game-intro">
          <span data-reactid=".0.1.0.0">Join the numbers and get to the </span>
          <strong data-reactid=".0.1.0.1">2048 tile!</strong>
        </div>
        
        <button onClick={onNewGame} className="restart-button">
          New Game
        </button>
      </div>

      <div className="game-container">
        {board.map((row: any, i: number) => {
            return (
              <div key={`row-${i}`} className="row">
                {row.map((cell: any, j: number) => (
                  <Cell key={`cell-${i}-${j}`} number={cell} />
                ))}
              </div>
            );
        })}
      </div>

      <p className="game-explanation my-5" data-reactid=".0.3">
        <strong className="important" data-reactid=".0.3.0">
          How to play:
        </strong>
        <span data-reactid=".0.3.1"> Use your </span>
        <strong data-reactid=".0.3.2">arrow keys</strong>
        <span data-reactid=".0.3.3">
          {" "}
          to move the tiles. When two tiles with the same number touch, they{" "}
        </span>
        <strong data-reactid=".0.3.4">merge into one!</strong>
      </p>
      
    </GameProvider>
  );
};

function useGameContext() {
    const context = useContext(GameContext);
    if (context === undefined) {
      throw new Error("useGameContext must be used within a GameContextProvider");
    }
    return context;
}

export { Game, useGameContext };
