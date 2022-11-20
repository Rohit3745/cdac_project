import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { blue, orange } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
});
const toolbarStyle = {
  minHeight: "15px",
  background: "#2E3B55",
};
export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar style={toolbarStyle}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <PetsIcon sx={{ fontSize: 30 }} /> PET HAVEN
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
      <AppBar></AppBar>
    </Box>
  );
}
