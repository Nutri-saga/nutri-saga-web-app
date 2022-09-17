import React, { useEffect } from "react";

//mui
import { Box } from "@mui/material";

//component's
import AboutCard from "../Components/AboutCard";
import Adress from "../Components/Adress";

//main component
function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <Box>
      <AboutCard />
      <Box>
        <Adress />
      </Box>
    </Box>
  );
}

export default About;
