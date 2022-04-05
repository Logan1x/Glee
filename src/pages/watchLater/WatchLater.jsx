import { useState, useEffect } from "react";

import "./watchLater.css";
import { useDataContext } from "../../context/dataContext";

export default function WatchLater() {
  const { state } = useDataContext();

  const [watchLater, setWatchLater] = useState([]);

  const getWatchLaterData = () => state.watchLater;

  useEffect(() => {
    setWatchLater(getWatchLaterData());
  }, [state.watchLater]);

  return (
    <div>
      <h1>Watch Later</h1>
      <div className="watchLater-wrapper">
        {watchLater &&
          watchLater.map(({ _id, title, creator, embedId }) => {
            return (
              <div key={_id} className="videoListing-card">
                <img
                  className="videoListing-card-image"
                  src={`https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`}
                  alt=""
                />
                <div>
                  <h2>{title}</h2>
                  <p>{creator}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
