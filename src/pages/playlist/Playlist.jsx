import React from "react";
import { useDataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";

import "./playlist.css";
import Noitems from "../../assets/noItems.svg";
import Sidebar from "../sidebar/Sidebar";

import NoVideo from "../../assets/noVideo.jpg";

export default function Playlist() {
  const { state } = useDataContext();
  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="playlist-wrapper">
        <h1 className="playlist-title">Playlist</h1>
        <div className="playlist-card-wrapper">
          {state.playlists && state.playlists.length > 0 ? (
            state.playlists.map((item) => {
              return (
                <Link to={`/playlistdetail/${item._id}`} key={item._id}>
                  <div className="playlist-card">
                    {item.videos.length > 0 ? (
                      <img
                        className="playlist-card-image"
                        src={`https://i.ytimg.com/vi/${item.videos[0].embedId}/hqdefault.jpg`}
                        alt="playlist-thumbnail"
                      />
                    ) : (
                      <img
                        className="playlist-card-image"
                        src={NoVideo}
                        alt="playlist-thumbnail"
                      />
                    )}
                    <p>
                      {item.title}({`${item.videos.length} videos`})
                    </p>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="no-items-text-center">
              <p>No playlist found</p>
              <img src={Noitems} alt="No items" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
