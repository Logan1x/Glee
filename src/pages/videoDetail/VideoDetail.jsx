import React from "react";
import { useParams } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import Sidebar from "../sidebar/Sidebar";
import "./videoDetail.css";

export default function VideoDetail() {
  const { vid } = useParams();
  const { state, dispatch, postWatchLaterData, postLike } = useDataContext();
  const { token } = useAuth();

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

  const { _id, title, description, creator, embedId } = VideosData.find(
    (video) => video._id === vid
  );

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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2>{title}</h2>
          <p>{description}</p>
          <p>Uploaded By: {creator}</p>

          {token && (
            <div className="videoDetail-buttons">
              {checkInLikes(_id) ? (
                <button className="videoDetail-button">Dislike</button>
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
              <button className="videoDetail-button">Add To Playlist</button>

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
    </div>
  );
}
