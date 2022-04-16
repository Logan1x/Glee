const dataReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_WATCH_LATER":
      return { ...state, watchLater: action.payload };
    case "SET_WATCHED_HISTORY":
      return { ...state, history: action.payload };
    case "SET_LIKE":
      return { ...state, likes: action.payload };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.payload };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  watchLater: [],
  history: [],
  likes: [],
  playlists: [],
};

export { dataReducerFunc, initialState };
