import './login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>🔑 로그인</h2>
      <form>
        <input type="text" placeholder="아이디" /><br />
        <input type="password" placeholder="비밀번호" /><br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
