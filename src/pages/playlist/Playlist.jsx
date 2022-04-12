import React from "react";
import { useDataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";

export default function Playlist() {
  const { state } = useDataContext();
  console.log(state.playlists);
  return (
    <div>
      <h1>Playlist</h1>
      {state.playlists &&
        state.playlists.map((item) => {
          return (
            <div key={item._id}>
              <Link to={`/playlistdetail/${item._id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
