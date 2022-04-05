import { Link } from "react-router-dom";

import "./videos.css";
import { useDataContext } from "../../context/dataContext";
import Sidebar from "../sidebar/Sidebar";

export default function Videos() {
  const { state } = useDataContext();

  const VideosData = state.data;

  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="videoListing-wrapper">
        <h3>
          <span>Showing All Results</span> (found {VideosData.length} results)
        </h3>
        <div className="videoListing-card-parent">
          {VideosData.map(({ _id, title, creator, embedId }) => {
            return (
              <Link to={`/videodetail/${_id}`} key={_id}>
                <div className="videoListing-card">
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
    </div>
  );
}
