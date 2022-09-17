import React from "react";

//@mui
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

//Component's
import Approuter from "./utils/Approuter";
import SideBar from "./Components/SideBar";

//main component
function App() {
  return (
    <SideBar>
      <Box sx={{ minHeight: "75vh" }}>
        <Approuter />
      </Box>
      <Typography
        sx={{
          letterSpacing: "0.03em",
          fontFamily: "Poppins",
          marginTop: "20px",
          fontWeight: "500",
        }}
        align="center"
      >
        Copyrights @NutriSaga'22
      </Typography>
    </SideBar>
  );
}

export default App;
