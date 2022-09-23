import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default App;
