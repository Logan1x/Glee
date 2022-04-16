import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./watchLater.css";
import { useDataContext } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import Noitems from "../../assets/noItems.svg";
import Sidebar from "../sidebar/Sidebar";

export default function WatchLater() {
  const { state, dispatch, deleteFromWatchLater } = useDataContext();
  const { token } = useAuth();

  const [watchLater, setWatchLater] = useState([]);

  const getWatchLaterData = () => state.watchLater;

  useEffect(() => {
    setWatchLater(getWatchLaterData());
  }, [state.watchLater]);

  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="watchlater-wrapper">
        <h1 className="watchLater-heading">Watch Later</h1>
        <div className="watchLater-wrapper">
          {watchLater.length > 0 ? (
            watchLater.map(({ _id, title, creator, embedId }) => {
              return (
                <div key={_id} className="videoListing-card">
                  <Link to={`/videodetail/${_id}`}>
                    <img
                      className="videoListing-card-image"
                      src={`https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`}
                      alt=""
                    />
                  </Link>
                  <div>
                    <h2>{title}</h2>
                    <p>{creator}</p>
                  </div>
                  <div className="delete-icon">
                    <svg
                      className="w-6 h-6 delete-icon-svg"
                      onClick={() => deleteFromWatchLater(_id, dispatch, token)}
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
              );
            })
          ) : (
            <div className="no-items-text-center">
              <p>No videos in watch later</p>
              <img src={Noitems} alt="No items" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
