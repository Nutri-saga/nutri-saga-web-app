import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import juiceImg from "../assets/juice.png";

const TopBar = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "60vh",
  display: "flex",
  background: "#FAFAFA",
  "& .color": {
    width: "10%",
    height: "100%",
    background: "orange",
    [theme.breakpoints.down("sm")]: {
      width: "0%",
      display: "none",
    },
  },
  "& .content": {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "0%",
      display: "none",
    },
    "& .text": {
      fontFamily: "cursive",
      letterSpacing: "0.05em",
    },
    "& .text2": {
      color: "#787878",
      fontWeight: "500",
      letterSpacing: "0.04em",
      fontStyle: "normal",
    },
  },
  "& .image": {
    width: "60%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& .img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

function Home() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/app/home");
    }
  }, [pathname, navigate]);

  return (
    <Box>
      <TopBar>
        <Box className="color"></Box>
        <Box className="content">
          <Typography variant="h2" className="text">
            Making time a good time by making food the good food.
          </Typography>
          <Typography variant="p" className="text2">
            Good food must be the first priority of day to day life. Good food
            must be the first priority of day to day life.
          </Typography>
        </Box>
        <Box className="image">
          <img alt="juice" src={juiceImg} className="img" />
        </Box>
      </TopBar>
    </Box>
  );
}

export default Home;
