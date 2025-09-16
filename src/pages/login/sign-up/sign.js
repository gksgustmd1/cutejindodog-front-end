import './sign.css';

function SignUp() {
  return (
    <div className="signup-container">
      <h2>📝 회원가입</h2>
      <form>
        <input type="text" placeholder="닉네임" /><br />
        <input type="password" placeholder="비밀번호" /><br />
        <input type="password" placeholder="비밀번호 확인" /><br />
        <input type="email" placeholder="이메일" /><br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
