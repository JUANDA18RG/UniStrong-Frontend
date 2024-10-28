import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
import Loading from "./components/Loading";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading, isVerified, typeUser } = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  if (isVerified === false) return <Navigate to="/validacion" replace />;
  if (isAuthenticated && typeUser === "cliente")
    return <Navigate to="/Inicio" replace />;
  if (isAuthenticated && typeUser === "coach")
    return <Navigate to="/InicioEntrenador" replace />;
  if (isAuthenticated && typeUser === "nutriologo")
    return <Navigate to="/InicioNutriologo" replace />;
  return <Outlet />;
};
