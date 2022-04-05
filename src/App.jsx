import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Toaster } from "react-hot-toast";

//pages
import Nav from "./pages/nav/Nav";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import VideoDetail from "./pages/videoDetail/VideoDetail";
import Login from "./pages/auth/Login";
import WatchLater from "./pages/watchLater/WatchLater";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="container-main">
      <Nav />
      <Routes>
        <Route path="/videos" element={<Videos />} />
        <Route path="/videodetail/:vid" element={<VideoDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watchlater" element={<WatchLater />} />

        {/* mockman route */}
        <Route path="/mockman" element={<Mockman />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
