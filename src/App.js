import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/login";
import LoginButton from "./login-button";
import Game from "./pages/games/game";  
import GameButton from "./game-button"; 

// 홈 화면 (Router 안쪽에서 실행됨)
function Home() {
  const navigate = useNavigate();

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
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
