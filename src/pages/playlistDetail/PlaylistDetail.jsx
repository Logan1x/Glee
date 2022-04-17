import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import Sidebar from "../sidebar/Sidebar";
import Noitems from "../../assets/noItems.svg";
import "./playlistDetail.css";

export default function PlaylistDetail() {
  const { pid } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const { state, dispatch, deletePlaylist, deleteVideoFromPlaylist } =
    useDataContext();

  const {
    _id: playlistId,
    title,
    videos,
  } = state.playlists.find((playlist) => playlist._id === pid);

  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="playlistDetail-wrapper">
        <div className="playlist-title">
          <h1>PlaylistDetail({title})</h1>
          <button
            onClick={() => {
              deletePlaylist(playlistId, dispatch, token);
              navigate("/playlist");
            }}
          >
            Delete Playlist
          </button>
        </div>
        {videos && videos.length > 0 ? (
          <div className="playlistDetail-card-parent">
            {videos.map(({ _id, title, creator, embedId }) => (
              <div className="videoListing-card" key={_id}>
                <Link to={`/videodetail/${_id}`}>
                  <img
                    className="videoListing-card-image"
                    src={`https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`}
                    alt="video thumbnail"
                  />
                  <div>
                    <h2>{title}</h2>
                    <p>{creator}</p>
                  </div>
                </Link>

                <div className="delete-icon">
                  <svg
                    className="w-6 h-6 delete-icon-svg"
                    onClick={() =>
                      deleteVideoFromPlaylist(playlistId, _id, dispatch, token)
                    }
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-items-text-center">
            <p>No videos in this playlist</p>
            <img src={Noitems} alt="No items" />
          </div>
        )}
      </div>
    </div>
  );
}
