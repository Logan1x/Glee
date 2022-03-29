import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Nav from "./pages/nav/Nav";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";

function App() {
  return (
    <div className="container-body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
