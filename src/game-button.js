import React from "react";

function GameButton({ navigate }) {
  return (
    <button style={{ margin: "10px", padding: "10px 20px" }} onClick={() => navigate("/games")}> 게임 선택 </button>
  );
}

export default GameButton;
