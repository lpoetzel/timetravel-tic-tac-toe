import React from "react";
import calculateWinner from "../functions/calculateWinner";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const isGameOver = winner || squares.every((square) => square !== null);

  function handleClick(i) {
    if (squares[i] || isGameOver) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
