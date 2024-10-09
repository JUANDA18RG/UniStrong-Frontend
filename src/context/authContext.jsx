import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import {
  verifyTokenRequest,
  LoginRequest,
  registerRequest,
  logoutRequest,
} from "../api/auth.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
          navigate("/login");
        } else {
          setUser(res.data.user);
          setIsAuthenticated(true);
        }
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
        console.error("Error al verificar el token:", error);
        navigate("/login");
      }
    };
    checkLogin();
  }, [navigate]);

  const signin = async (user) => {
    try {
      const response = await LoginRequest(user);
      setUser(response.data.user);
      console.log("Response from LoginRequest:", response.data.user);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      console.error(
        "Error durante el inicio de sesión:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      console.log("Response from registerRequest:", response);
      return response;
    } catch (error) {
      console.error(
        "Error durante el registro:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const signout = async () => {
    try {
      await logoutRequest();
      Cookies.remove("token");
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Error 401: No autorizado. No se pudo cerrar sesión.");
      } else {
        console.error(
          "Error durante el cierre de sesión:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        User,
        isAuthenticated,
        loading,
        signin,
        signup,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
