import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GoogleImg from "../../assets/images/Google.png";
import FacebookImg from "../../assets/images/Facebook.png";
import InstagramImg from "../../assets/images/Instagram.png";

// ----------------------------------------------------------------------

export function FormSocials() {
  return (
    <Box gap={1.5} display="flex" justifyContent="center">
      <IconButton color="inherit">
        <img src={GoogleImg} alt="Google" width={35} />
      </IconButton>
      <IconButton color="inherit">
        <img src={InstagramImg} alt="Instagram" width={35} />
      </IconButton>
      <IconButton color="inherit">
        <img src={FacebookImg} alt="Facebook" width={35} />
      </IconButton>
    </Box>
  );
}
