import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import "./history.css";

export default function History() {
  const { state } = useDataContext();

  const [history, setHistory] = useState([]);

  const getHistoryData = () => state.history;

  useEffect(() => {
    setHistory(getHistoryData());
  }, [state.history]);
  return (
    <div>
      <h1 className="watchingHistory-heading">Watch History</h1>
      <div className="watchingHistory-wrapper">
        {history.length > 0
          ? history.map(({ _id, title, creator, embedId }) => {
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
                </div>
              );
            })
          : "No videos in watch later"}
      </div>
    </div>
  );
}
