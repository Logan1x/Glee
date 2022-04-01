import axios from "axios";

export const loginUtility = async (email, password) => {
  return axios.post("/api/auth/login/", {
    email,
    password,
  });
};
