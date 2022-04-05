import { Link } from "react-router-dom";

import "./videos.css";
import { useDataContext } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";

export default function Videos() {
  const { state } = useDataContext();
  const { token } = useAuth();

  const VideosData = state.data;

  return (
    <div className="videoListing-wrapper">
      <h1 className="videoListing-title">Videos</h1>
      <span>Showing All Results</span> (found {VideosData.length} results)
      <div className="videoListing-card-parent">
        {VideosData.map(({ _id, title, description, creator, embedId }) => {
          return (
            <Link to={`/videodetail/${_id}`}>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
