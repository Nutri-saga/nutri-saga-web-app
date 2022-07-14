import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom';
import { DishContext } from "../Context/DishContext";

export default React.memo(function UpdateDishCards({ val }) {

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 220, height:420 ,cursor:"pointer", boxShadow:"gray 2px 5px 15px" }} onClick={()=>navigate(`/updatedish/${val._id}`)}>
      <CardMedia
        component="img"
        width="auto"
        height="60%"
        image={val.image_url["url"]}
        alt={val.name}
        sx={{border:"2px solid green", borderRadius:"5px", padding:"3px"}}
      />
      <CardContent>
        <Typography sx={{fontWeight:"600", letterSpacing:"0.05em", height:"100px", color:"#424242"}} align="center" gutterBottom variant="h5" component="div">
          {val.name}
        </Typography>
        <Typography align="left" gutterBottom component="div">
          <span style={{ fontWeight: "600" }}>Servings</span>
          {`: ${val.servings}`}
        </Typography>
      </CardContent>
    </Card>
  );
});
