import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import AboutCard from "../Components/AboutCard";
import HomeSteps from "../Components/HomeSteps";
import Stepper from "../Components/Stepper";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Stepper />

        <Box sx={{ marginTop: "50px" }}>
          <HomeSteps />
          <hr style={{ opacity: "0.2", marginTop: "60px" }} />
          <AboutCard />
        </Box>
      </div>
    </div>
  );
}

export default Home;
