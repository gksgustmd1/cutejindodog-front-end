import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/login";
import LoginButton from "./login-button";

function App() {
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
        <button style={{ margin: "10px", padding: "10px 20px" }}>게임 선택</button>
      </div>
    </div>
  );
}

export default App;
