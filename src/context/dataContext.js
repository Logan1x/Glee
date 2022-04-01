import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducerFunc, initialState } from "../reducer/dataReducer";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducerFunc, initialState);

  const getData = async () => {
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: "SET_DATA", payload: data.videos });
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
