import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{ width: "100%", height: 550 }}
      noValidate
      autoComplete="off"
    >
      <Stack
        height="70%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <h1>Login</h1>
        <TextField
          sx={{ width: "27%" }}
          label="Outlined secondary"
          color="secondary"
        />
        <TextField
          sx={{ width: "27%" }}
          label="Outlined secondary"
          color="secondary"
        />
        <Button sx={{ width: "27%" }} variant="contained">
          LOGIN
        </Button>
      </Stack>
    </Box>
  );
}
