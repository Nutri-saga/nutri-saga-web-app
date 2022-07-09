import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PlannerCard({ title, value, color }) {
  return (
    <Card sx={{ width:"200px",  paddingLeft:"20px", paddingright:"20px", background:`${color}`, boxShadow:`${color} 2px 5px 15px`, margin:"2px" }}>
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div" color="white">
          {`Total ${title}`}
        </Typography>
        <Typography align="center" variant="h4" color="white">
          {`${value}g`}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
