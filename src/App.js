import { Typography } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Box from "@mui/material/Box";

import SideBar from "./Components/SideBar";
import Approuter from "./utils/Approuter";

function App() {
  return (
    <SideBar>
      <Box sx={{minHeight:"75vh"}}>
        <Approuter />
      </Box>
      <Typography
          sx={{ letterSpacing: "0.03em", fontFamily: "Poppins", marginTop:"20px", fontWeight:"500" }}
          align="center"
        >
          Copyrights @NutriSaga'22
        </Typography>
    </SideBar>
  );
}

export default App;
