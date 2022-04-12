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
import History from "./pages/history/History";
import Playlist from "./pages/playlist/Playlist";
import PlaylistDetail from "./pages/playlistDetail/PlaylistDetail";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="container-main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videodetail/:vid" element={<VideoDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlistdetail/:pid" element={<PlaylistDetail />} />

        {/* mockman route */}
        <Route path="/mockman" element={<Mockman />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
