import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  sendCodeRequest,
  verifyCodeRequest,
  changePasswordRequest,
} from "../api/verification.js";

export const VerificationContext = createContext();

export const useVerification = () => {
  const context = useContext(VerificationContext);
  if (!context) {
    throw new Error("useVerification must be used within a VerificationProvider");
  }
  return context;
};

export const VerificationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const requestPasswordCode = async (email) => {
    setLoading(true);
    try {
      const response = await sendCodeRequest(email);
      console.log("Código de recuperación enviado:", response);
      return response;
    } catch (error) {
      console.error("Error al solicitar el código de recuperación:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const verifyCodeAndResetPassword = async (email, code, newPassword) => {
    setLoading(true);
    try {
      await verifyCodeRequest(email, code); // Verificar el código primero
      const response = await changePasswordRequest(email, newPassword);
      console.log("Contraseña restablecida:", response);
      return response;
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <VerificationContext.Provider
      value={{
        loading,
        requestPasswordCode,
        verifyCodeAndResetPassword,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

VerificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
