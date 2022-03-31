import { useState } from "react";
import { Link } from "react-router-dom";

import "./auth.css";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const [email, setEmail] = useState("khu@gmail.com");
  const [password, setPassword] = useState("khush");

  const { loginHandler } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginHandler(email, password);
  };
  return (
    <main className="container-auth">
      <div className="container-paint text-center">
        <h1>Login</h1>
        <form action="" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Ex: example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Ex: *******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-group-flex">
            <input type="checkbox" name="remember" id="remember" value="1" />
            <label htmlFor="remember">Remember me</label>
            <small>Forgot your password?</small>
          </div>
          <button type="submit" className="auth-btn">
            Login
          </button>
          <div className="form-redirect">
            <Link to="/signup">Dont have account? Sign up here</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
