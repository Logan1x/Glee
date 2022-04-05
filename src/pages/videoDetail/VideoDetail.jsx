import React from "react";
import { useParams } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import "./videoDetail.css";

export default function VideoDetail() {
  const { vid } = useParams();
  const { state } = useDataContext();
  const { token } = useAuth();

  const VideosData = state.data;

  const { _id, title, description, creator, embedId } = VideosData.find(
    (video) => video._id === vid
  );

  return (
    <div className="videoDetail-card-wrapper">
      <div key={_id} className="videoDetail-card">
        <div className="videoDetail-embed">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${embedId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <h2>{title}</h2>
        <p>{description}</p>
        <p>Uploaded By: {creator}</p>

        {token && (
          <div className="videoDetail-buttons">
            <button className="videoDetail-button">Like</button>
            <button className="videoDetail-button">Add To Playlist</button>
            <button className="videoDetail-button">Add To Watch Later</button>
          </div>
        )}
      </div>
    </div>
  );
}
