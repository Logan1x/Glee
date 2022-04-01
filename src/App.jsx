import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Nav from "./pages/nav/Nav";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="container-main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
