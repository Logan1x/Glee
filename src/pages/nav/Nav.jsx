import { Link } from "react-router-dom";

import "./nav.css";
import { useAuth } from "../../context/authContext";

export default function Nav() {
  const { token, logoutHandler } = useAuth();

  const handleClick = () => {
    logoutHandler();
  };

  return (
    <nav className="nav">
      <div className="nav-title">
        <p>
          <a href="/"> Glee </a>
          <span className="text-sm">v1.0</span>
        </p>
      </div>
      <div className="nav-pills">
        {token ? (
          <a onClick={handleClick} className=" btn-filled">
            Logout
          </a>
        ) : (
          <Link to="/login" className=" btn-filled">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
