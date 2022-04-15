import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import { dataReducerFunc, initialState } from "../reducer/dataReducer";
import { useAuth } from "../context/authContext";
import {
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
} from "../utils/dataHelperFunc.js";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducerFunc, initialState);

  const { token } = useAuth();

  const getData = async () => {
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: "SET_DATA", payload: data.videos });
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
