import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/">Watch Later</Link>
        <Link to="/">My Playlists</Link>
        <Link to="/">Watching History</Link>
      </div>
      ;
    </div>
  );
}
