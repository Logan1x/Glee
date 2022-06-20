import { useState } from "react";
import { useParams } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import Sidebar from "../sidebar/Sidebar";
import "./videoDetail.css";

export default function VideoDetail() {
  const { vid } = useParams();
  const {
    state,
    dispatch,
    postWatchLaterData,
    postLike,
    removeLike,
    postPlayListsData,
    postVideoToPlaylist,
  } = useDataContext();
  const { token } = useAuth();

  const [loadModal, setLoadModal] = useState("hide-modal");
  const [playListName, setPlayListName] = useState("");
  const [createNewPlayList, setCreateNewPlayList] = useState(false);

  const changeModalState = () =>
    loadModal === "" ? setLoadModal("hide-modal") : setLoadModal("");

  const VideosData = state.data;

  const checkInWatchLater = (id) => {
    if (state.watchLater) {
      if (state.watchLater && state.watchLater.length > 0) {
        return state.watchLater.find((item) => item._id === id);
      }
    }
    return false;
  };

  const checkInLikes = (id) => {
    if (state.likes) {
      if (state.likes.length > 0) {
        return state.likes.find((item) => item._id === id);
      }
    }
    return false;
  };

  const { _id, title, description, creator, embedId, uploadDate, viewCount } =
    VideosData.find((video) => video._id === vid);

  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="videoDetail-card-wrapper">
        <div key={_id} className="videoDetail-card">
          <div className="videoDetail-embed">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${embedId}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <h2>{title}</h2>
          <p>{description}</p>
          <p>Uploaded By: {creator}</p>
          <p>Uploaded On: {uploadDate}</p>
          <p>Views: {viewCount}</p>

          {token && (
            <div className="videoDetail-buttons">
              {checkInLikes(_id) ? (
                <button
                  className="videoDetail-button"
                  onClick={() => removeLike(_id, dispatch, token)}
                >
                  Dislike
                </button>
              ) : (
                <button
                  className="videoDetail-button"
                  onClick={() =>
                    postLike(
                      { _id, title, description, creator, embedId },
                      dispatch,
                      token
                    )
                  }
                >
                  Like
                </button>
              )}
              <button className="videoDetail-button" onClick={changeModalState}>
                Add To Playlist
              </button>

              {checkInWatchLater(_id) ? (
                <button className="videoDetail-button">
                  Added To Watch Later
                </button>
              ) : (
                <button
                  className="videoDetail-button"
                  onClick={() =>
                    postWatchLaterData(
                      { _id, title, description, creator, embedId },
                      dispatch,
                      token
                    )
                  }
                >
                  Add To Watch Later
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`playlist-modal ${loadModal}`}>
        <div className="playlist-content">
          <div className="playlist-modal-heading">
            <h2>Add to Playlist</h2>
            <svg
              onClick={changeModalState}
              className="w-6 h-6 close-modal-btn"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <hr />
          <div>
            {state.playlists && state.playlists.length > 0
              ? state.playlists.map((playlist) => (
                  <div key={playlist._id} className="playlist-modal-content">
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        cl
                        onChange={() => {
                          postVideoToPlaylist(
                            { _id: playlist._id },
                            dispatch,
                            token,
                            { _id, title, description, creator, embedId }
                          );
                          changeModalState();
                        }}
                      />
                      {playlist.title}
                    </label>
                  </div>
                ))
              : ""}
          </div>
          <div>
            {createNewPlayList ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  postPlayListsData({ title: playListName }, dispatch, token);
                  setCreateNewPlayList(false);
                  setPlayListName("");
                }}
                className="playlist-modal-form"
              >
                <input
                  type="text"
                  placeholder="Playlist Name"
                  value={playListName}
                  onChange={(e) => setPlayListName(e.target.value)}
                  className="playlist-modal-input"
                />
                <button type="submit">Create</button>
              </form>
            ) : (
              <button onClick={() => setCreateNewPlayList(!createNewPlayList)}>
                Create New Playlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
