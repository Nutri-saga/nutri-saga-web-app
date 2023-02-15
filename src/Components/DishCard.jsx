import React, { useContext, useEffect } from "react";

//@mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//Context
import { DishContext } from "../Contexts/DishContext";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyleBox = styled(Box)(({ theme }) => ({
  "& .image": {
    width: "50%",
    border: `2px solid ${theme.palette.secondary.main}`,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  "& .content": {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    "& .main-text": {
      fontWeight: "600",
      fontSize: "1.8vh",
      fontFamily: "Poppins",
      fontStyle: "none",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    "& .sub-text": {
      fontWeight: "400",
      fontSize: "1.5vh",
      fontFamily: "Poppins",
      fontStyle: "none",
      lineHeight: "14px",
      letterSpacing: "0.05em",
      textTransform: "initial",
      color: "#787878",
    },
  },
}));

//Component
export default React.memo(function DishCard({ val }) {
  const { dishes, getDish } = useContext(DishContext);

  useEffect(() => {
    dishes?.map((dish) => {
      if (dish._id === val._id) {
        getDish();
      }
      return "";
    });
  }, [dishes, getDish, val]);

  return (
    <StyleBox sx={{ width: "23%" }}>
      <Card
        className="dish-card"
        sx={{
          flex: 1,
          border: (theme) => `1px solid ${theme.palette.secondary.main}`,
          width: "100%",
          height: "9rem",
          boxShadow: "gray 1px 1px 10px",
          display: "flex",
          padding: "0.4rem",
        }}
      >
        <CardMedia
          className="image"
          component="img"
          image={val.image_url["url"]}
          alt={val.name}
        />
        <CardContent
          className="content"
          sx={{ width: "50%", p: 0, m: 0, pl: 0.5 }}
        >
          <Typography className="main-text">{val.name}</Typography>
          <Typography className="sub-text">Servings: {val.servings}</Typography>
          <Typography className="sub-text">Protein: {val.protein}g</Typography>
        </CardContent>
      </Card>
    </StyleBox>
  );
});
