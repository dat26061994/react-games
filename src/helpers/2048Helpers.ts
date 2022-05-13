export const getEmptyBoard = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

let currentPoint = 0;

const hasValue = (board: any, value: any) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === value) {
          return true;
        }
      }
    }
    return false;
};

export const isFull = (board: any) => {
    return !hasValue(board, 0);
};

const getRandomPosition = () => {
    const rowPosition = Math.floor(Math.random() * 4);
    const colPosition = Math.floor(Math.random() * 4);
    return [rowPosition, colPosition];
};

export const generateRandom = (board: any) => {
    if (isFull(board)) {
      return board;
    }
  
    let [row, col] = getRandomPosition();
    while (board[row][col] !== 0) {
      [row, col] = getRandomPosition();
    }
  
    board[row][col] = 2;
    return board;
};

const compress = (board: any) => {
    const newBoard = getEmptyBoard();
    for (let i = 0; i < board.length; i++) {
      let colIndex = 0;
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== 0) {
          newBoard[i][colIndex] = board[i][j];
          colIndex++;
        }
      }
    }
    return newBoard;
};

const merge = (board: any, type: string) => {
    
    let point = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
          board[i][j] = board[i][j] * 2;
          board[i][j + 1] = 0;
          if (type !== 'check') {
              point = board[i][j];
          }
        }
      }
    }

    return {
        point: point,
        board: board
    };
};

export const moveLeft = (board: any, type: string) => {
    const newBoard1 = compress(board);
    const newBoard2 = merge(newBoard1, type);
    
    return {
        board: compress(newBoard2.board),
        point: newBoard2.point,
    };
};

const reverse = (board: any) => {
    const reverseBoard = getEmptyBoard();
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        reverseBoard[i][j] = board[i][board[i].length - 1 - j];
      }
    }
  
    return reverseBoard;
};

export const moveRight = (board: any, type: string) => {
    const reversedBoard = reverse(board);
    const newBoard = moveLeft(reversedBoard, type);
    return {
        board: reverse(newBoard.board),
        point: newBoard.point,
    };
};
  
  const rotateLeft = (board: any) => {
    const rotateBoard = getEmptyBoard();
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        rotateBoard[i][j] = board[j][board[i].length - 1 - i];
      }
    }
  
    return rotateBoard;
};

const rotateRight = (board: any) => {
    const rotateBoard = getEmptyBoard();
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        rotateBoard[i][j] = board[board[i].length - 1 - j][i];
      }
    }
  
    return rotateBoard;
};
  
export const moveUp = (board: any, type: string) => {
    const rotateBoard = rotateLeft(board);
    const newBoard = moveLeft(rotateBoard, type);
    return {
        board: rotateRight(newBoard.board),
        point: newBoard.point,
    };
};
  
export const moveDown = (board: any, type: string) => {
    const rotateBoard = rotateRight(board);
    const newBoard = moveLeft(rotateBoard, type);
    return {
        board: rotateLeft(newBoard.board),
        point: newBoard.point,
    };
};
  
export const checkWin = (board: any) => {
    return hasValue(board, 2048);
};

const hasDiff = (board: any, updatedBoard: any) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== updatedBoard[i][j]) {
          return true;
        }
      }
    }
    return false;
};
  
export const isOver = (board: any) => {
    if (hasDiff(board, moveLeft(board, 'check'))) {
      return false;
    }
    if (hasDiff(board, moveRight(board, 'check'))) {
      return false;
    }
    if (hasDiff(board, moveUp(board, 'check'))) {
      return false;
    }
    if (hasDiff(board, moveDown(board, 'check'))) {
      return false;
    }
    return true;
};