import { Link } from "react-router-dom";

import "./videos.css";
import { useDataContext } from "../../context/dataContext";
import Sidebar from "../sidebar/Sidebar";
import { useAuth } from "../../context/authContext";
import { useCategoryHook } from "../../hooks/categoryHook";

export default function Videos() {
  const { state, dispatch, postHistoryData } = useDataContext();
  const { categorisedData } = useCategoryHook();

  const { token } = useAuth();

  const VideosData = categorisedData;

  return (
    <div className="sidebar-grid-parent">
      <Sidebar />
      <div className="videoListing-wrapper">
        <h3>
          <span>Showing All Results</span> (found {VideosData.length} results)
        </h3>
        <div className="category-wrapper">
          {state.category.map(({ id, categoryName }) => {
            return (
              <div
                key={id}
                className="category-chips"
                onClick={() =>
                  dispatch({ type: "SORT_BY_CATEGORY", payload: categoryName })
                }
              >
                {categoryName}
              </div>
            );
          })}
        </div>
        <div className="videoListing-card-parent">
          {VideosData.map(({ _id, title, creator, embedId }) => {
            return (
              <Link
                to={`/videodetail/${_id}`}
                key={_id}
                onClick={() =>
                  postHistoryData(
                    { _id, title, creator, embedId },
                    dispatch,
                    token
                  )
                }
              >
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
