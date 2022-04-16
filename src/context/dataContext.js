import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import { dataReducerFunc, initialState } from "../reducer/dataReducer";
import { useAuth } from "../context/authContext";
import {
  getData,
  getWatchLaterData,
  postWatchLaterData,
  deleteFromWatchLater,
  getHistoryData,
  postHistoryData,
  getLike,
  postLike,
  removeLike,
  getPlayListsData,
  postPlayListsData,
  postVideoToPlaylist,
  deleteVideoFromPlaylist,
  deletePlaylist,
  getCategories,
} from "../utils/dataHelperFunc.js";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducerFunc, initialState);

  const { token } = useAuth();

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: "SET_DATA", payload: data.videos });

    const categoryData = await getCategories();
    dispatch({ type: "SET_CATEGORY", payload: categoryData.categories });

    if (token) {
      const watchLaterData = await getWatchLaterData(token);
      dispatch({ type: "SET_WATCH_LATER", payload: watchLaterData });

      const historyData = await getHistoryData(token);
      dispatch({ type: "SET_WATCHED_HISTORY", payload: historyData });

      const likeData = await getLike(token);
      dispatch({ type: "SET_LIKE", payload: likeData });

      const playListsData = await getPlayListsData(token);
      dispatch({ type: "SET_PLAYLISTS", payload: playListsData });
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        postWatchLaterData,
        deleteFromWatchLater,
        postHistoryData,
        postLike,
        removeLike,
        postPlayListsData,
        postVideoToPlaylist,
        deleteVideoFromPlaylist,
        deletePlaylist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
