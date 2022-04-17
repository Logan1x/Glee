import { useState } from "react";
import { Link } from "react-router-dom";

import "./auth.css";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { loginHandler } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginHandler(userData);
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
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Ex: *******"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
          <div className="form-group-flex">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              value="1"
              checked
            />
            <label htmlFor="remember" className="text-small">
              Remember me
            </label>
            <small className="text-small">Forgot your password?</small>
          </div>
          <button type="submit" className="auth-btn">
            Login
          </button>
          <button
            className="auth-test-btn"
            onClick={() =>
              loginHandler({ email: "khu@gmail.com", password: "khush" })
            }
            type="button"
          >
            Test Credentials
          </button>
          <div className="form-redirect">
            <Link to="/signup">Dont have account? Sign up here</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
