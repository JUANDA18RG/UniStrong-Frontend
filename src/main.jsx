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
import ForgotPassword from "./components/ForgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<NoMatch />} />
              <Route path="/Inicio" element={<Inicio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
