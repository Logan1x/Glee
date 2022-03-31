import { createContext, useContext, useState } from "react";
import { loginUtility } from "../utils/authHelper";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const loginHandler = async (email, password) => {
    try {
      const response = await loginUtility(email, password);

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
        setCurrentUser(response.data.foundUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setToken(null);
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, logoutHandler, token, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
