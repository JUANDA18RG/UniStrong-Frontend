import { Box, Container } from "@mui/material";

import Hero from "../components/Hero";

import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";

const metadata = { title: `Bienvenido |  ${CONFIG.appName}` };

const Home = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <Box sx={{ bgcolor: "black.main" }}>
        <Container>
          <Hero />
        </Container>
      </Box>
    </>
  );
};

export default Home;
