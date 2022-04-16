import axios from "axios";

import { notify } from "./toastNotifyHelper";

export const getData = async () => {
  try {
    const response = await axios.get("/api/videos");
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("/api/categories");
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

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
      notify("Added to Watch Later", "success", "🎉");
    }
  } catch (error) {
    console.error(error);
    notify("Error adding to Watch Later", "error", "😢");
  }
};

export const deleteFromWatchLater = async (videoId, dispatch, token) => {
  try {
    const response = await axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: `/api/user/watchlater/${videoId}`,
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_WATCH_LATER", payload: response.data.watchlater });
      notify("Removed from Watch Later", "success");
    }
  } catch (error) {
    console.error(error);
    notify("Error removing from Watch Later", "error", "😢");
  }
};

export const getHistoryData = async (token) => {
  try {
    const response = await axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.history;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postHistoryData = async (
  { _id, title, creator, embedId },
  dispatch,
  token
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/history",
      data: JSON.stringify({
        video: { _id, title, creator, embedId },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_WATCHED_HISTORY", payload: response.data.history });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getLike = async (token) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.like;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postLike = async (
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
      url: "/api/user/likes",
      data: JSON.stringify({
        video: { _id, title, description, creator, embedId },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_LIKE", payload: response.data.likes });
      notify("Added to Likes Videos", "success");
    }
  } catch (error) {
    console.error(error);
    notify("Error adding to Likes Videos", "error");
  }
};

export const removeLike = async (_id, dispatch, token) => {
  try {
    const response = await axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: `/api/user/likes/${_id}`,
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_LIKE", payload: response.data.likes });
      notify("Removed from Likes Videos", "success");
    }
  } catch (error) {
    console.error(error);
    notify("Error removing from Likes Videos", "error");
  }
};

export const getPlayListsData = async (token) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.playlists;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postPlayListsData = async (playlistObj, dispatch, token) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/playlists",
      data: JSON.stringify({
        playlist: playlistObj,
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_PLAYLISTS", payload: response.data.playlists });
    }
  } catch (error) {
    console.error(error);
  }
};

export const postVideoToPlaylist = async (
  { _id },
  dispatch,
  token,
  videoObj
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: `/api/user/playlists/${_id}`,
      data: JSON.stringify({
        video: videoObj,
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "UPDATE_PLAYLIST", payload: response.data.playlist });
      notify("Added to Playlist", "success");
    } else if (response.status === 409) {
      notify("Video Already Exist in Playlist", "error");
    }
  } catch (error) {
    console.error(error);
    notify("Error adding to Playlist", "error");
  }
};

export const deletePlaylist = async (_id, dispatch, token) => {
  try {
    const response = await axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: `/api/user/playlists/${_id}`,
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_PLAYLISTS", payload: response.data.playlists });
      notify("Playlist Deleted", "success");
    }
  } catch (error) {
    console.error(error);
    notify("Error deleting Playlist", "error");
  }
};

export const deleteVideoFromPlaylist = async (
  playlistId,
  videoId,
  dispatch,
  token
) => {
  try {
    const response = await axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: `/api/user/playlists/${playlistId}/${videoId}`,
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "UPDATE_PLAYLIST", payload: response.data.playlist });
      notify("Video Deleted from Playlist", "success");
    }
  } catch (error) {
    console.error(error);
    notify("Error deleting Video from Playlist", "error");
  }
};
