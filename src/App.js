import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/login";
import LoginButton from "./login-button";
import SignUp from "./pages/login/sign-up/sign";
import Game from "./pages/games/game";
import GameList from "./pages/games/GameList";
import GameButton from "./game-button";

import { useEffect, useState } from "react";
import { getUsers } from "./API/api";

// 홈 화면 (Router 안쪽에서 실행됨)
function Home({ user, onLogout }) {
  const navigate = useNavigate();
  const [apiUsers, setApiUsers] = useState([]);   // ✅ 이름 통일

  // API 호출
  useEffect(() => {
    getUsers().then(setApiUsers);
  }, []);

  return (
    <div
      className="App-header"
      style={{
        backgroundImage: "url('/cutejindodog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}
    >
      <h1>🎮 Mini Game Platform</h1>

      {!user ? (
        <>
          <p>환영합니다! 원하는 메뉴를 선택하세요.</p>
          <div>
            <LoginButton navigate={navigate} />
            <GameButton navigate={navigate} />
          </div>
        </>
      ) : (
        <>
          <p>{user.nickname}님 환영합니다 🎉</p>
          <button onClick={onLogout}>로그아웃</button>
        </>
      )}
      {/* ✅ 게임 버튼은 항상 노출 */}
      <div style={{ marginTop: "10px" }}>
        <GameButton navigate={navigate} />
      </div>


      <div
        style={{
          marginTop: "20px",
          background: "rgba(0,0,0,0.5)",
          padding: "10px",
          borderRadius: "8px"
        }}
      >
        <h2>Users from Spring Boot API</h2>
        <ul>
          {apiUsers.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (nickname) => {
    setUser({ nickname }); // 로그인 성공 시 닉네임 저장
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/5mok" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
