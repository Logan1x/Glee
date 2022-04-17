import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import Sidebar from "../sidebar/Sidebar";
import Noitems from "../../assets/noItems.svg";
import "./history.css";

export default function History() {
  const { state } = useDataContext();

  const [history, setHistory] = useState([]);

  const getHistoryData = () => state.history;

  useEffect(() => {
    setHistory(getHistoryData());
  }, [state.history]);
  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="watchingHistory">
        <h1 className="watchingHistory-heading">Watch History</h1>
        <div className="watchingHistory-wrapper">
          {history.length > 0 ? (
            history.map(({ _id, title, creator, embedId }) => {
              return (
                <div key={_id} className="videoListing-card">
                  <Link to={`/videodetail/${_id}`}>
                    <img
                      className="videoListing-card-image"
                      src={`https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`}
                      alt="Video thumbnail"
                    />
                  </Link>
                  <div>
                    <h2>{title}</h2>
                    <p>{creator}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-items-text-center">
              <p>No videos in watch history</p>
              <img src={Noitems} alt="No items" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
