import './sign.css';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [form, setForm] = useState({
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
    code: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 인증코드 요청 버튼 이벤트
  const handleRequestCode = () => {
    if (!form.email) {
      alert("이메일을 먼저 입력하세요.");
      return;
    }
    axios.post("http://100.82.187.105:8080/api/users/request-signup", {
      email: form.email
    })
    .then(res => {
      alert(res.data); // "인증 코드가 이메일로 발송되었습니다."
    })
    .catch(err => {
      console.error(err);
      alert("인증코드 요청 실패: " + err.message);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    axios.post("http://100.82.187.105:8080/api/users/verify", {
      nickname: form.nickname,
      password: form.password,
      email: form.email,
      code: form.code
    })
    .then(res => {
      alert("회원가입 성공!");
    })
    .catch(err => {
      console.error(err);
      alert("회원가입 실패: " + err.message);
    });
  };

  return (
    <div className="signup-container">
      <h2>📝 회원가입</h2>
      {/* 여기 onSubmit 꼭 추가 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={form.nickname}
          onChange={handleChange}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
        /><br />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          value={form.passwordConfirm}
          onChange={handleChange}
        /><br />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
        />
        <button type="button" onClick={handleRequestCode}>인증코드 받기</button>
        <br />
         <input
           type="text"
           name="code"
           placeholder="인증 코드"
           value={form.code}
           onChange={handleChange}
        /><br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
