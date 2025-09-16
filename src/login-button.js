function LoginButton({ navigate }) {
  return (
    <button onClick={() => navigate("/login")} style={{ margin: "10px", padding: "10px 20px" }}>로그인/회원가입</button>
  );
}

export default LoginButton;
