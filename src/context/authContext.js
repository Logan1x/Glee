import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUtility, signupUtility } from "../utils/authHelper";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const toastStyle = {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  };

  const notify = (msg, status) => {
    status === "success"
      ? toast.success(msg, toastStyle)
      : toast.error(msg, toastStyle);
  };

  const loginHandler = async (userData) => {
    try {
      const response = await loginUtility(userData);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        navigate("/videos");
        setToken(response.data.encodedToken);
        setCurrentUser(response.data.foundUser);
        notify("Logged in successfully!", "success");
      }
    } catch (err) {
      console.error(err);
      notify("Please try again", "error");
    }
  };

  const signupHandler = async (userData) => {
    try {
      const response = await signupUtility(userData);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        navigate("/videos");
        setToken(response.data.encodedToken);
        setCurrentUser(response.data.foundUser);
        notify("Signed up successfully!", "success");
      }
    } catch (err) {
      console.error(err);
      notify("Please try again", "error");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setToken(null);
    setCurrentUser(null);
    navigate("/login");
    notify("Logged out successfully", "success");
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        signupHandler,
        logoutHandler,
        token,
        currentUser,
        notify,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
