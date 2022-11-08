import { Box } from '@mui/material';
import { BallTriangle } from 'react-loader-spinner';

const Loading = ({ width, height }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width || 1,
        height: height || 1,
        margin: 'auto',
      }}
    >
      <BallTriangle width="100%" height="100%" color="#FF2625" />
    </Box>
  );
};

export default Loading;
