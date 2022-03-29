import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-title">
        <p>
          <a href="/"> Glee </a>
          <span className="text-sm">v1.0</span>
        </p>
      </div>
      <div className="nav-pills">
        <Link to="/login" className=" btn-filled">
          Login
        </Link>
      </div>
    </nav>
  );
}
