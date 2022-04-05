import axios from "axios";

export const getWatchLaterData = async (token) => {
  try {
    const response = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.watchlater;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postWatchLaterData = async (
  { _id, title, description, creator, embedId },
  dispatch,
  token
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/watchlater",
      data: JSON.stringify({
        video: { _id, title, description, creator, embedId },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_WATCH_LATER", payload: response.data.watchlater });
    }
  } catch (error) {
    console.error(error);
  }
};
