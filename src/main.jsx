import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Exercises from './pages/Exercises';
import Favorites from './pages/Favorites';
import NoMatch from './pages/NoMatch';
import theme from './theme';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="exercises" element={<Exercises />} />
              <Route path="exercises/:id" element={<ExerciseDetail />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
