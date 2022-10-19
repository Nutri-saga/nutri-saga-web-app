import React, { useEffect } from "react";

//@mui
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ReactGA from "react-ga";

const TRACKING_ID = "G-M9P7LV2K81";

//Component's
import Approuter from "./utils/Approuter";
import SideBar from "./Components/SideBar";

ReactGA.initialize(TRACKING_ID);

//main component
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
