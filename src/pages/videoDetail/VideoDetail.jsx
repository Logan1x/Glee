import React from "react";
import { useParams } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import "./videoDetail.css";

export default function VideoDetail() {
  const { vid } = useParams();
  const { state } = useDataContext();

  const VideosData = state.data;

  const { _id, title, description, creator } = VideosData.find(
    (video) => video._id === vid
  );

  return (
    <div className="videoDetail-card-wrapper">
      <div key={_id} className="videoDetail-card">
        <div className="videoDetail-embed">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/RshlH3T27U4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <h2>{title}</h2>
        <p>{description}</p>
        <p>{creator}</p>
      </div>
    </div>
  );
}
