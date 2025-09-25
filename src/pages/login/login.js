import './login.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {   // ✅ App.js에서 내려주는 onLogin
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ 스프링부트 서버 IP (100.82.187.105)
      const res = await axios.post("http://100.82.187.105:8080/api/users/login", form);

      // ✅ 로그인 성공 시 닉네임 저장
      onLogin(res.data.nickname);

      // ✅ 홈으로 이동
      navigate("/");
    } catch (err) {
      alert("로그인 실패: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="login-container">
      <h2>🔑 로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          placeholder="nickname"
          value={form.nickname}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">로그인</button>
        <button
          type="button"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Login;
