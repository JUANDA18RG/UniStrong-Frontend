import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./context/authContext";
import App from "./App";
import theme from "./theme";
import Loading from "./components/Loading";
import { ProtectedRoute } from "./routes";

const Home = lazy(() => import("./pages/Home"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const About = lazy(() => import("./components/About"));
const Inicio = lazy(() => import("./pages/Inicio"));
const User = lazy(() => import("./pages/User"));
const PageValidacion = lazy(() => import("./pages/pageValidacion.jsx"));

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
                <Routes>
                  <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/About" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/Inicio" element={<Inicio />} />
                      <Route path="/user/:id" element={<User />} />
                    </Route>
                    <Route path="/validacion" element={<PageValidacion />} />
                  </Route>
                </Routes>
              </Suspense>
            </SnackbarProvider>
          </ThemeProvider>
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
