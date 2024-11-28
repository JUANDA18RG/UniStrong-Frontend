import Divider from "@mui/material/Divider";

// ----------------------------------------------------------------------

export function FormDivider() {
  return (
    <Divider
      sx={{
        my: 3,
        typography: "overline",
        color: "text.disabled",
        "&::before, :after": { borderTopStyle: "dashed" },
      }}
    ></Divider>
  );
}
