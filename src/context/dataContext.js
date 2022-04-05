import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import { dataReducerFunc, initialState } from "../reducer/dataReducer";
import { useAuth } from "../context/authContext";
import {
  getWatchLaterData,
  postWatchLaterData,
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

  // const postWatchLaterData = (video, token) => {
  //   const data = postDataToWatchLaterArr(video, token);
  //   console.log(data);
  //   dispatch({ type: "SET_WATCH_LATER", payload: data });
  // };

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: "SET_DATA", payload: data.videos });
    if (token) {
      const watchLaterData = await getWatchLaterData(token);
      dispatch({ type: "SET_WATCH_LATER", payload: watchLaterData });
    }
  }, [token]);

  return (
    <DataContext.Provider value={{ state, dispatch, postWatchLaterData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
