function LoginButton({ navigate }) {
  return (
    <button onClick={() => navigate("/login")} style={{ margin: "10px", padding: "10px 20px" }}>로그인</button>
  );
}

export default LoginButton;
