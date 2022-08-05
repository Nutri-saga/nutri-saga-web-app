import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


export default React.memo(function UpdateDishCards({ val }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/updatedish/${val._id}`)}
    >
      <img
        width="200px"
        height="200px"
        style={{
          borderRadius: "50%",
          position: "relative",
          marginBottom: "-140px",
          marginLeft: "10px",
        }}
        src={val.image_url["url"]}
      />
      <Card
        sx={{
          width: 220,
          height: 240,
          cursor: "pointer",
          boxShadow: "gray 2px 5px 15px",
          paddingTop: "120px",
        }}
      >
        {/* <CardMedia
        component="img"
        width="auto"
        height="60%"
        image={val.image_url["url"]}
        alt={val.name}
        sx={{border:"2px solid green", borderRadius:"5px", padding:"3px"}}
      /> */}
        <CardContent>
          <Typography
            sx={{
              fontWeight: "600",
              letterSpacing: "0.05em",
              height: "100px",
              color: "#424242",
            }}
            align="center"
            gutterBottom
            variant="h5"
            component="div"
          >
            {val.name}
          </Typography>
          {/* <Typography align="left" gutterBottom component="div">
            <span style={{ fontWeight: "600" }}>Servings</span>
            {`: ${val.servings}`}
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
});
