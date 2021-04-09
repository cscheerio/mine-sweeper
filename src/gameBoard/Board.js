import React from "react";
import Square from "./Square/Square";

function Board() {
  const xCount = 9;
  const yCount = 9;
  var squareTypes = [
    "Empty",
    "Empty",
    "Empty",
    "Empty",
    "Empty",
    "Empty",
    "Bomb",
    "Number"
  ];

  const grid = new Array(yCount).fill(0).map(() => new Array(xCount).fill(0));
  for (var i = 0; i < yCount; i++) {
    for (var c = 0; c <= xCount; c++) {
      var randomItem =
        squareTypes[Math.floor(Math.random() * squareTypes.length)];
      grid[i][c] = <Square x={i + 1} y={c + 1} type={randomItem} />;
    }
  }
  return grid;
}
export default Board;
