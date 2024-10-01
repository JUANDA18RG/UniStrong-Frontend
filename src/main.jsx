import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import theme from "./theme";
import { SnackbarProvider } from "notistack";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Inicio from "./pages/Inicio";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<NoMatch />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/Inicio" element={<Inicio />} />
              </Route>
            </Route>
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
