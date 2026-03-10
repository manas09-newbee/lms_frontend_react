import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    // Example response (replace with API later)
    // const fakeResponse = {
    //   role: email.includes("admin") ? "admin" : "student"
    // };

    // if (fakeResponse.role === "admin") {
    //   navigate("/admin/dashboard");
    // } else {
    //   navigate("/student/dashboard");
    // }

    if (email === "admin@test.com") {
    navigate("/admin/dashboard");
    } else {
    navigate("/student/dashboard");
    }

  };

  return (
    <div className="login-page">

      <div className="login-brand">
        <h1>LMS Portal</h1>
        <p>Smart Learning & Assessment Platform</p>
      </div>

      <div className="login-modal">

        <h2>Welcome...</h2>

        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;