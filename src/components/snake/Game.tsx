import React, {
    RefCallback,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import StyledGame, { MainWrapper, StatusWrapper } from './StyledGame';
import {
    IGameProps,
    BoardCell,
    GameConfig,
    GameState,
    GameLevel,
    GameTitle,
    KeyCode,
    ICoordinate,
    Direction,
} from '../../interface/snake/ISnake';
import { Sound } from '../../helpers/Audio';
import Board  from '../../components/snake/Board';
import Welcome from '../../components/snake/Welcome';
import Title from '../../components/snake/Title';
import Status from '../../components/snake/Status';
import { useSwipeable } from 'react-swipeable';

const Game = ({
    state: debugState,
    food: debugFood,
    snake: debugSnake,
    score: debugScore,
    level: debugLevel,
    mute,
    }: IGameProps) => {

    const [gameState, setGameState] = useState(debugState);
    const [food, setFood] = useState(debugFood);
    const [snake, setSnake] = useState<number[]>(debugSnake as number[]);
    const [score, setScore] = useState<any>(debugScore);
    const [level, setLevel] = useState<any>(debugLevel);
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [snakeLocked, setSnakeLocked] = useState(false);
    
    // For callback or async use
    const gameStateRef = useRef<GameState>();
    gameStateRef.current = gameState;

    // New food has 100 scores when created, reduce 5 per step util down to 5.
    const [foodScore, setFoodScore] = useState(100);
    const [bestScore, setBestScore] = useState(0);
    const [isBestScore, setIsBestScore] = useState(false);

    const [countDown, setCountDown] = useState<string>();

    // Step timer
    const [time, setTime] = React.useState(0);

    // Game board cell counts
    const cellCount = BoardCell.column * BoardCell.row;

    const sleep = (seconds: number) => {
        new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

    const initBestScore = (level: GameLevel) => {
        setBestScore(parseInt(localStorage.getItem(`SCORE_${level}`) || '0'));
    }

    const saveBestScore = () => {
        if (score > bestScore) {
          setIsBestScore(true);
          setBestScore(score);
          localStorage.setItem(`SCORE_${level}`, score.toString());
        } else {
          setIsBestScore(false);
        }
    };

    const startNewGame = async (level: GameLevel) => {
        setLevel(level);
        initBestScore(level);
        setFood([]);
        setGameState(GameState.CountingDown);
        for (const i of [3, 2, 1]) {
          Sound(mute)?.low.play();
          setCountDown(i.toString());
          await sleep(0.5);
        }
        Sound(mute)?.high.play();
        setCountDown(GameTitle.Go);
        await sleep(0.5);
    
        const initSnake = [53, 32, 11];
        setDirection(Direction.down);
        setSnake(initSnake);
        generateFood(initSnake);
        setGameState(GameState.Playing);
    };

    const toCoordinate = (ordinal: number) => {
        const x = Math.ceil(ordinal / BoardCell.column);
        return {
          x: x,
          y: ordinal - (x - 1) * BoardCell.column,
        };
    };
    
    const toOrdinal = ({ x, y }: ICoordinate) => {
        return (x - 1) * BoardCell.column + y;
    };

    const generateFood = async (snake: number[]) => {
        let newFood;
        do {
          newFood = Math.floor(Math.random() * cellCount) + 1;
        } while (snake.includes(newFood));
        setFood([newFood]);
        setFoodScore(100);
    };

    const preventSelfEaten = async (head: number, tail: number[]) => {
        if (tail.includes(head)) {
          setGameState(GameState.End);
        }
    };

    const generateSnake = async (
        snake?: number[],
        food?: number[],
        direction?: ICoordinate
      ) => {
        const { x: x0, y: y0 } = toCoordinate(snake ? snake[0] : 0);
        const [x, y] = [x0 + (direction?.x || 0), y0 + (direction?.y || 0)];
    
        const head = toOrdinal({ x, y });
        let lst = -1;
        if (food && head === food[0]) {
          lst = snake?.length || -1;
          Sound(mute)?.high.play();
          setScore(score + foodScore);
        } else if (foodScore > 5) {
          setFoodScore((s) => s - 5);
        }
    
        const tail = snake?.slice(0, lst) || [];
        preventSelfEaten(head, tail);
    
        const newSnake = [head, ...tail];
        if (lst !== -1) generateFood(newSnake);
    
        if (x < 1 || y < 1 || x > BoardCell.row || y > BoardCell.column) {
          setGameState(GameState.End);
          newSnake.shift();
        }
    
        setSnake(newSnake);
    };

    const changeState = () => {
        switch (gameStateRef.current) {
          case GameState.End:
            setGameState(GameState.Initial);
            setFood(debugFood);
            setSnake([]);
            setScore(0);
            break;
          case GameState.Playing:
            setGameState(GameState.Pausing);
            break;
          case GameState.Pausing:
            setGameState(GameState.Playing);
            break;
        }
    };

    const clickable = () => {
        return gameStateRef.current !== GameState.Initial &&
        gameStateRef.current !== GameState.CountingDown;
    }

    // Listen to keypress
    const pressFunction = useCallback((event) => {
        if (!clickable()) return;

        switch (event.keyCode) {
        case KeyCode.Space:
            changeState();
            break;
        case KeyCode.Left:
            setDirection((d) => (d.y !== 0 ? d : Direction.left));
            break;
        case KeyCode.Right:
            setDirection((d) => (d.y !== 0 ? d : Direction.right));
            break;
        case KeyCode.Up:
            setDirection((d) => (d.x !== 0 ? d : Direction.up));
            break;
        case KeyCode.Down:
            setDirection((d) => (d.x !== 0 ? d : Direction.down));
            break;
        }
    }, []);

    // Listen to touch event
    const { ref } = useSwipeable({
        onSwipedLeft: () => pressFunction({ keyCode: KeyCode.Left }),
        onSwipedRight: () => pressFunction({ keyCode: KeyCode.Right }),
        onSwipedUp: () => pressFunction({ keyCode: KeyCode.Up }),
        onSwipedDown: () => pressFunction({ keyCode: KeyCode.Down }),
    }) as { ref: RefCallback<Document> };

    useEffect(() => {
        ref(document);
        document.addEventListener('keydown', pressFunction, false);
        return () => document.removeEventListener('keydown', pressFunction, false);
    }, []);

    useEffect(() => {
        if (gameState !== GameState.End) return;
    
        Sound(mute)?.die.play();
        saveBestScore();
    }, [gameState]);

    useEffect(() => {
        const timer = window.setInterval(
          () => setTime((prevTime) => prevTime + 1),
          [400, 200, 100][Object.values(GameLevel).indexOf(level)]
        );
        return () => clearInterval(timer);
    }, [level]);

    useEffect(() => {
        if (snakeLocked || gameState !== GameState.Playing) return;
        setSnakeLocked(true);

        (async () => {
        await generateSnake(snake, food, direction);
        setSnakeLocked(false);
        })();
    }, [time]);


    return (
        <StyledGame>
            <MainWrapper $clickable={clickable()} onClick={changeState}>
                <Board food={food} snake={snake} state={gameState} />
                {gameState === GameState.Initial && <Welcome onClick={startNewGame} />}

                {gameState === GameState.CountingDown && (
                    <Title size="large">{countDown}</Title>
                )}

                {gameState === GameState.End && (
                    <Title>
                        {isBestScore ? GameTitle.BestScore : GameTitle.GameOver}
                    </Title>
                )}

            </MainWrapper>

            <StatusWrapper>
                {gameState !== GameState.Initial && (
                <Status
                    score={score}
                    level={level}
                    bestScore={bestScore}
                    stopped={gameState === GameState.End}
                />
                )}
            </StatusWrapper>
        </StyledGame>
    );
}
Game.defaultProps = {
    ...Board.defaultProps,
    ...Status.defaultProps,
    mute: false,
} as IGameProps;

export default Game;