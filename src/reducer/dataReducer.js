const dataReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_WATCH_LATER":
      return { ...state, watchLater: action.payload };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  watchLater: [],
};

export { dataReducerFunc, initialState };
