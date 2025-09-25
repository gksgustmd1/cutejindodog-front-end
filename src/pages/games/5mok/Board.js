import React from "react";

const CELL_SIZE = 40;

function Board({ board, onCellClick }) {
  return (
    <div
      style={{
        position: "relative",
        width: (board.length - 1) * CELL_SIZE,
        height: (board.length - 1) * CELL_SIZE,
        background: "bisque",
        border: "2px solid black",
      }}
    >
      {/* 바둑판 줄 그리기 */}
      <svg
        width={(board.length - 1) * CELL_SIZE}
        height={(board.length - 1) * CELL_SIZE}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* 세로줄 */}
        {Array.from({ length: board.length }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * CELL_SIZE}
            y1={0}
            x2={i * CELL_SIZE}
            y2={(board.length - 1) * CELL_SIZE}
            stroke="black"
          />
        ))}
        {/* 가로줄 */}
        {Array.from({ length: board.length }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * CELL_SIZE}
            x2={(board.length - 1) * CELL_SIZE}
            y2={i * CELL_SIZE}
            stroke="black"
          />
        ))}
      </svg>

      {/* 돌 두기 */}
      {board.map((row, y) =>
        row.map((cell, x) =>
          cell !== 0 ? (
            <div
              key={`${x}-${y}`}
              style={{
                position: "absolute",
                left: x * CELL_SIZE - 10, // 교차점 중앙
                top: y * CELL_SIZE - 10,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: cell === 1 ? "black" : "white",
                border: "1px solid black",
              }}
            />
          ) : null
        )
      )}

      {/* 클릭 영역 */}
      {board.map((row, y) =>
        row.map((_, x) => (
          <div
            key={`click-${x}-${y}`}
            onClick={() => onCellClick(x, y)}
            style={{
              position: "absolute",
              left: x * CELL_SIZE - CELL_SIZE / 2,
              top: y * CELL_SIZE - CELL_SIZE / 2,
              width: CELL_SIZE,
              height: CELL_SIZE,
              background: "transparent",
            }}
          />
        ))
      )}
    </div>
  );
}


export default Board;
