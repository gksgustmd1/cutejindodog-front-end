import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/login";
import LoginButton from "./login-button";
import SignUp from "./pages/login/sign-up/sign";
import Game from "./pages/games/game";  
import GameButton from "./game-button"; 

import { useEffect, useState } from "react";
import { getUsers } from "./API/api";

// 홈 화면 (Router 안쪽에서 실행됨)
function Home() {
  const navigate = useNavigate();
  
  //call api
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
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
      <p>환영합니다! 원하는 메뉴를 선택하세요.</p>
      <div>
        <LoginButton navigate={navigate} />
        <GameButton navigate={navigate} /> 
      </div>

      <div style={{ marginTop: "20px", background: "rgba(0,0,0,0.5)", padding: "10px", borderRadius: "8px" }}>
        <h2>Users from Spring Boot API</h2>
        <ul>
          {users.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/games" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
