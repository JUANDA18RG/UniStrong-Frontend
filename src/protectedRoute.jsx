import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
import Loading from "./components/Loading";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading, isVerified, typeUser } = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated && !loading) return <Navigate to="/Login" replace />;
  if (isVerified === false) return <Navigate to="/validacion" replace />;

  return <Outlet />;
};