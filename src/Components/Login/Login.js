import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{ width: "100%", height: 300 }}
      noValidate
      autoComplete="off"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <p>LOGIN</p>
        <TextField label="Outlined secondary" color="secondary" />
        <TextField label="Outlined secondary" color="secondary" />
        <Button variant="contained">LOGIN</Button>
      </Stack>
    </Box>
  );
}
