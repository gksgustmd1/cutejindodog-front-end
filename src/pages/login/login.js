import './login.css';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2>🔑 로그인</h2>
      <form>
        <input type="text" placeholder="아이디" /><br />
        <input type="password" placeholder="비밀번호" /><br />
        <button type="submit">로그인</button>
        <button type="button" style={{ marginLeft: "10px" }} onClick={() => navigate("/signup")}>회원가입 </button>
      </form>
    </div>
  );
}

export default Login;
