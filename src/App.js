import { Typography } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./Components/SideBar";
import Approuter from "./utils/Approuter";

function App() {
  return (

    <SideBar>
      <Approuter />
      <Typography sx={{letterSpacing:"0.03em", fontFamily:"Poppins"}} align="center">Copyrights @NutriSaga'22</Typography>
    </SideBar>
  );
}

export default App;
