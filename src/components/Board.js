import { useState } from "react";
import Cell from "./Cell";

function generateBoard(pairs) {
  const gridSize = 2 * pairs;

  const numScrambles = 1000000;

  const board = [...Array(gridSize).keys()].map((i) => Math.floor(i / 2) + 1);

  for (let scramble = 0; scramble < numScrambles; scramble++) {
    const index1 = Math.floor(Math.random() * gridSize);
    const index2 = Math.floor(Math.random() * gridSize);

    const v1 = board[index1];
    board[index1] = board[index2];
    board[index2] = v1;
  }

  return board;
}

function select(index, board, setBoard, solved, setSolved) {
  const numSelected = board.map((i) => i < 0).reduce((a, b) => a + b, 0);
  const selectedVal = board[index];

  const selectable = selectedVal > 0 && !solved[selectedVal - 1];

  if (numSelected < 2 && selectable) {
    const newBoard = [...board];
    newBoard[index] = -board[index];
    setBoard(newBoard);
    if (numSelected === 1) {
      const [a, b] = newBoard.filter((e) => e < 0);
      if (a === b) {
        const newSolved = [...solved];
        newSolved[Math.abs(a) - 1] = true;
        setSolved(newSolved);
        setBoard(newBoard.map(Math.abs));
      } else {
        setTimeout(() => {
          setBoard(newBoard.map(Math.abs));
        }, 3000);
      }
    }
  }
}

function Board() {
  const pairs = 12;

  const [board, setBoard] = useState(generateBoard(pairs));
  const [solved, setSolved] = useState([...Array(pairs)].fill(false));

  // return <div className="board">Hi</div>;
  return (
    <div className="board">
      {board.map((val, index) => (
        <Cell
          key={index}
          val={val}
          solved={solved[Math.abs(val) - 1]}
          select={() => select(index, board, setBoard, solved, setSolved)}
        />
      ))}
    </div>
  );
}

export default Board;
