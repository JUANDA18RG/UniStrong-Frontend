import { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import {
  verifyTokenRequest,
  LoginRequest,
  registerRequest,
  logoutRequest,
  deactivateAccountRequest,
} from "../api/auth.js";
import { useNavigate } from "react-router-dom";
import ModaSesion from "../components/Modal.jsx";

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
  const [showModal, setShowModal] = useState(false);
  const [isVerified, setIsVerified] = useState(null);
  const [typeUser, setTypeUser] = useState(null);
  const [isFirstLogin, setisFirstLogin] = useState(false);
  const [additionalData, setAdittionalData] = useState(null);

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
          setShowModal(true);
          setIsAuthenticated(false);
          Cookies.remove("token");
        } else {
          setUser(res.data.user);
          setIsAuthenticated(true);
          setIsVerified(res.data.user.infoClienteVerified);
          setisFirstLogin(res.data.infoClientRegistered);
          const storedAdditionalData = localStorage.getItem("additionalData");
           
        //Esto
          const storedTypeUser = localStorage.getItem('typeUser');
          if (storedTypeUser) {
            setTypeUser(storedTypeUser);
          }

          if (storedAdditionalData) {
            setAdittionalData(JSON.parse(storedAdditionalData));
          }
        }
        setLoading(false);
      } catch (error) {
        setShowModal(true);
        setLoading(false);
        setIsAuthenticated(false);
        console.error("Error al verificar el token:", error);
      }
    };
    checkLogin();
  }, [navigate]);

  const signin = async (user) => {
    try {
      const response = await LoginRequest(user);
      setUser(response.data.user);
      console.log("Response from LoginRequest:", response.data.user);
      setAdittionalData(response.data.user.additionalData);
      localStorage.setItem(
        "additionalData",
        JSON.stringify(response.data.user.additionalData)
      );

      localStorage.setItem('typeUser', response.data.user.userType); 
      console.log("informacioAdicional", response.data.user.additionalData);
      setIsAuthenticated(true);
      setIsVerified(response.data.user.infoClienteVerified);
      console.log("Estado de validación:", response.data.user.infoClienteVerified);
      setTypeUser(response.data.user.userType);
      console.log("tipo de usuario", response.data.user.userType);
      setisFirstLogin(response.data.infoClientRegistered);
      console.log(
        "Es la primera vez que se loguea:",
        response.data.infoClientRegistered
      );
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
      const res = await logoutRequest();
      Cookies.remove("token");
      localStorage.removeItem("additionalData");
      setUser(null);
      setIsAuthenticated(false);
      return res;
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

  const deactivateAccount = async (password) => {
    try {
      const response = await deactivateAccountRequest(password);
      setIsAuthenticated(false);
      setUser(null);
      if (!response) {
        throw new Error("No se recibió una respuesta válida");
      }
      return response;
    } catch (error) {
      if (error.response) {
        console.error(
          "Error desactivando la cuenta:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No se recibió respuesta:", error.request);
      } else {
        console.error("Error desconocido:", error.message);
      }
      throw error;
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
        isVerified,
        typeUser,
        isFirstLogin,
        deactivateAccount,
        additionalData,
      }}
    >
      {children}
      {showModal && <ModaSesion open={showModal} />}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
