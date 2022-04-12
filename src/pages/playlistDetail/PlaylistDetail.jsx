import React from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";

export default function PlaylistDetail() {
  const { pid } = useParams();
  const { state } = useDataContext();

  console.log(state.playlists);

  const { _id, title, videos } = state.playlists.find(
    (playlist) => playlist._id === pid
  );

  console.log(title, videos);

  return (
    <div>
      <h1>PlaylistDetail</h1>
      {videos && videos.length > 0 ? (
        <ul>
          {videos.map((video) => (
            <li key={video._id}>{video.title}</li>
          ))}
        </ul>
      ) : (
        <p>No videos in this playlist</p>
      )}
    </div>
  );
}
