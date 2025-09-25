import React from "react";
import { Link } from "react-router-dom";

function GameList() {
  return (
    <div style={{ margin: 20 }}>
      <h1>게임 목록</h1>
      <ul>
        <li>
          <Link to="/games/5mok">오목</Link>
        </li>
        {/* 나중에 추가할 게임들 여기에 */}
      </ul>
    </div>
  );
}

export default GameList;
