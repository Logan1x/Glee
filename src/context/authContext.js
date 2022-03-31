import { createContext, useContext, useState } from "react";
import { loginUtility } from "../utils/authHelper";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);

  const loginHandler = async (email, password) => {
    try {
      const response = await loginUtility(email, password);

      console.log(response);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        navigate("/");
        setToken(response.data.encodedToken);
        setCurrUser(response.data.foundUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setToken(null);
    setCurrUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, logoutHandler, token, currUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
