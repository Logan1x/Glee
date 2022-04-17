import axios from "axios";

export const loginUtility = async (userData) => {
  return axios.post("/api/auth/login/", {
    email: userData.email,
    password: userData.password,
  });
};

export const signupUtility = async (userData) =>
  axios.post("/api/auth/signup/", {
    email: userData.email,
    password: userData.password,
    name: userData.name,
  });
