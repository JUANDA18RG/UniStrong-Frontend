import { Box } from "@mui/material";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <BallTriangle width="100" height="100" color="#FF2625" />
    </Box>
  );
};

export default Loading;
