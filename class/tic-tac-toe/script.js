const boardRef = document.getElementById("board");
const timelineRef = document.getElementById("timeline");
const messageRef = document.getElementById("message");

// 1 -> X, 0 -> O
let currentPlayer = 1;

const boardState = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

window.onload = () => {
  paintBoard();
  attachBoardListener();
};

const paintBoard = () => {
  boardRef.innerHTML = "";
  for (let i = 0; i < boardState.length; i++) {
    let row = `<div class="row">`;
    for (let j = 0; j < boardState[i].length; j++) {
      const inner =
        boardState[i][j] == 0 ? "O" : boardState[i][j] == 1 ? "X" : "";
      row += `<div class="cell" id="cell-[${i}][${j}]">${inner}</div>`;
    }
    row += `</div>`;

    boardRef.innerHTML += row;
  }
};

const evaluateBoard = () => {
  // check rows
  for (let i = 0; i < boardState.length; i++) {
    let rowState = boardState[i][0] !== -1;
    for (let j = 0; j < boardState[i].length - 1; j++) {
      rowState = rowState && boardState[i][j] === boardState[i][j + 1];
    }

    if (rowState) {
      return boardState[i][0];
    }
  }

  // check columns
  for (let j = 0; j < boardState.length; j++) {
    let columnState = boardState[0][j] !== -1;
    for (let i = 0; i < boardState[j].length - 1; i++) {
      columnState = columnState && boardState[i][j] === boardState[i + 1][j];
    }

    if (columnState) {
      return boardState[0][j];
    }
  }

  let diagonalState = boardState[0][0] !== -1;
  for (let i = 0; i < boardState.length - 1; i++) {
    diagonalState =
      diagonalState && boardState[i][i] == boardState[i + 1][i + 1];
  }

  if (diagonalState) {
    return boardState[0][0];
  }

  let antiDiagonalState = boardState[0][boardState.length - 1] !== -1;
  for (let i = 0; i < boardState.length - 1; i++) {
    antiDiagonalState =
      antiDiagonalState &&
      boardState[i][boardState.length - i - 1] ==
        boardState[i + 1][boardState.length - i - 2];
  }

  if (antiDiagonalState) {
    return boardState[0][boardState.length - 1];
  }

  return -1; // can't determine winner
};

const canPlay = () => {
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[i].length; j++) {
      if (boardState[i][j] == -1) {
        return true;
      }
    }
  }

  return false;
};

const freezeBoard = () => {
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[i].length; j++) {
      document.getElementById(`cell-[${i}][${j}]`).style.pointerEvents = "none";
    }
  }
};

const updateGame = () => {
  const player = evaluateBoard();
  if (player === 1) {
    messageRef.innerHTML = "X is the winner!";
    console.log(`X is the winner!`);
    freezeBoard();
  } else if (player == 0) {
    messageRef.innerHTML = "O is the winner!";
    console.log(`O is the winner!`);
    freezeBoard();
  } else {
    if (canPlay()) {
      console.log(`The game still can be played!`);
    } else {
      messageRef.innerHTML = "This game is a draw!";
      console.log(`The game is a draw`);
      freezeBoard();
    }
  }
};

const attachBoardListener = () => {
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[i].length; j++) {
      document
        .getElementById(`cell-[${i}][${j}]`)
        .addEventListener("click", () => {
          if (boardState[i][j] === -1) {
            timelineRef.innerHTML += `<p>${
              currentPlayer === 1 ? "X" : "O"
            } on coordinate cell[${i}][${j}]</p>`;
            boardState[i][j] = currentPlayer;
            currentPlayer = currentPlayer === 1 ? 0 : 1;
          }
          paintBoard(); // repaint the board
          attachBoardListener(); // reattach all of the board listener
          updateGame();
        });
    }
  }
};
