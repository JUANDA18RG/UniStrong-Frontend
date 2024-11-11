import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./context/authContext";
import { VerificationProvider } from "./context/VerificationContext";
import App from "./App";
import theme from "./theme";
import Loading from "./components/Loading";
import { ProtectedRoute } from "./routes";

const Home = lazy(() => import("./pages/Home"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const About = lazy(() => import("./components/About"));
const Client = lazy(() => import("./sections/Client"));
const User = lazy(() => import("./sections/User"));
const Entrenador = lazy(() => import("./sections/Entrenador"));
const Nutriologo = lazy(() => import("./sections/Nutriologo"));
const PageValidacion = lazy(() => import("./pages/pageValidacion.jsx"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const Settings = lazy(() => import("./components/Settings"));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <Suspense fallback={<Loading />}>
              <VerificationProvider>
                <Routes>
                  <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />
                    <Route path="/Settings" element={<Settings />} /> 
                    <Route path="*" element={<NoMatch />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/Inicio" element={<Client />} />
                      <Route
                        path="/InicioEntrenador"
                        element={<Entrenador />}
                      />
                      <Route
                        path="/InicioNutriologo"
                        element={<Nutriologo />}
                      />
                      <Route path="/user/:id" element={<User />} />
                    </Route>
                    <Route path="/validacion" element={<PageValidacion />} />
                  </Route>
                </Routes>
                </VerificationProvider>
              </Suspense>
            </SnackbarProvider>
          </ThemeProvider>
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
