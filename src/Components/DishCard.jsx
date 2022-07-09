import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import tomato from "../assets/tomatoes.jpg";
import { valueToPercent } from "@mui/base";

export default function DishCard({ val }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        width="100%"
        height="200"
        image={val.image_url["url"]}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>
            <span style={{ fontWeight: "600" }}>Servings</span>
            {`: ${val.servings}`}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Energy</span>
            {`: ${val.energy}`}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Fats</span>
            {`: ${val.fats}`}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Protein</span>
            {`: ${val.protein}`}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Calories</span>
            {`: ${val.calories}`}
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
