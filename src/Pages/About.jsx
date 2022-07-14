import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AboutCard from "../Components/AboutCard";
import Adress from "../Components/Adress";


function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <Box>
      <AboutCard />
      <Box>
        <Adress/>
      </Box>
    </Box>
  );
}

export default About;
