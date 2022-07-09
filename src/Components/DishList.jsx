import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default React.memo(function DishList({ val }) {
  return (
    <Card sx={{margin:"10px", padding:"10px"}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img width="40" height="40" src={val.image_url["url"]} />
        <Typography sx={{marginLeft:"20px"}}>{val.name}</Typography>
      </div>
    </Card>
  );
})
