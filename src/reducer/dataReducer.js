const dataReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const initialState = {
  data: [],
};

export { dataReducerFunc, initialState };
