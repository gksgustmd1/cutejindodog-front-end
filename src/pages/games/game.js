import React, { useEffect, useState } from "react";
import Board from "./5mok/Board";

const BOARD_SIZE = 15;

function Game() {
  const [board, setBoard] = useState(
    Array(BOARD_SIZE).fill(0).map(() => Array(BOARD_SIZE).fill(0))
  );
  const [ws, setWs] = useState(null);
  const [player, setPlayer] = useState(null);   // 내 역할 (1=흑, 2=백)
  const [players, setPlayers] = useState([]);   // 방 참가자 목록
  const [timer, setTimer] = useState(null);     // {player, remaining}

  useEffect(() => {
    const socket = new WebSocket("ws://100.89.218.98:8000/ws/room1");
    setWs(socket);

    socket.onopen = () => {
      console.log("✅ WebSocket 연결 성공");
      // 닉네임 전송 (하드코딩, 나중엔 입력받아도 됨)
      socket.send(JSON.stringify({ type: "join", name: "Alice" }));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.error) {
        alert(msg.error);
        return;
      }

      if (msg.info) {
        setPlayer(msg.player); // 내 역할 저장
      }

      if (msg.type === "players") {
        setPlayers(msg.players);
      }

      if (msg.type === "timer") {
        setTimer({ player: msg.player, remaining: msg.remaining });
      }

      if (msg.type === "move") {
        setBoard((prev) => {
          const newBoard = prev.map((row) => [...row]);
          newBoard[msg.y][msg.x] = msg.player;
          return newBoard;
        });

        if (msg.winner) {
          alert(`${msg.winner === 1 ? "흑" : "백"} 승리!`);
        }
      }

      if (msg.type === "timeout") {
        alert(msg.msg);
      }
    };

    socket.onclose = () => console.log("❌ WebSocket 연결 종료");
    socket.onerror = (err) => console.error("WebSocket 오류:", err);

    return () => socket.close();
  }, []);

  const handleCellClick = (x, y) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    if (board[y][x] !== 0) return;

    // 내 차례일 때만 클릭 가능
    if (timer && timer.player !== player) {
      alert("당신의 차례가 아닙니다!");
      return;
    }

    ws.send(JSON.stringify({ x, y })); // 서버가 내 id 강제 확인
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>온라인 오목 (렌주룰 + 30초 타이머)</h1>

      {/* 참가자 목록 */}
      <div style={{ marginBottom: "10px" }}>
        {players.map((p, idx) => (
          <div key={idx}>
            {p.name} ({p.id === 1 ? "흑" : "백"})
          </div>
        ))}
      </div>

      {/* 타이머 */}
      {timer && (
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          {timer.player === player ? "내 차례" : "상대 차례"} ⏱ {timer.remaining}s
        </div>
      )}

      <Board board={board} onCellClick={handleCellClick} />
    </div>
  );
}

export default Game;

