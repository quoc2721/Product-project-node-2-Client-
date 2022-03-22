import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function userProfile() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ width: "100%", height: 500 }}
    >
      <Box>
        <Avatar />
        <h4>User Profile</h4>
        <p>Web Designer</p>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1, width: "100%" } }}>
        <h5>Thông tin cá nhân </h5>
        <Grid rowSpacing={2}>
          <Grid>
            <TextField label="Họ và tên" focused />
          </Grid>
          <Grid>
            <TextField label="Họ và tên" focused />
          </Grid>
          <Grid>
            <TextField label="Họ và tên" focused />
          </Grid>
          <Grid>
            <TextField label="Họ và tên" focused />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
//"& > :not(style)": { m: 1, width: "25ch" }
