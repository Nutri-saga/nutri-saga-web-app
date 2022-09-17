import React from "react";

//@mui
import { CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";

//@react-router-dom
import { useNavigate } from "react-router-dom";

//component
function AboutCard() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "auto",
        marginTop: "35px",
        padding: "20px",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          margin: "auto",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/about")}
      >
        <InfoIcon />
        <Typography align="center" sx={{ fontWeight: "600" }}>
          About Us
        </Typography>
      </Box>
      <CardContent>
        <Typography sx={{ letterSpacing: "0.05em" }}>
          Nutri Saga is an application which will allow you to enter your daily
          nutriion in daily nutri calculator and then convert the daily
          nutrition to weekly nutrition and helps you to select the different
          dishes from the dish book according to your choice to full fill the
          weekly nutrition requirements.
        </Typography>
      </CardContent>
    </Box>
  );
}

export default AboutCard;
