import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

export function FormHead() {
  return (
    <>
      <Box
        component="span"
        display="inline-flex"
        sx={{ mx: "auto", mb: 3 }}
      ></Box>

      <Box
        gap={1.5}
        display="flex"
        flexDirection="column"
        sx={{ mb: 5, textAlign: "center", whiteSpace: "pre-line" }}
      >
        <Typography variant="h5"></Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        ></Typography>
      </Box>
    </>
  );
}
