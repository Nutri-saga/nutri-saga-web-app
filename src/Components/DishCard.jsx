import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { DishContext } from "../Context/DishContext";

export default React.memo(function DishCard({ val }) {
  const { setDish, dishes, getDish, removeDish } = useContext(DishContext);

  const [cart, setCart] = useState(false);

  useEffect(() => {
    dishes?.map((dish) => {
      if (dish._id === val._id) {
        setCart(true);
        getDish();
      }
    });
  }, []);

  const handleRemove = () => {
    val["status"] = "add";
    removeDish(val);
    setCart(false);
  };
  const handleAdd = () => {
    val["status"] = "remove";
    setDish(val);
    setCart(true);
  };

  return (
    <>
      <img
        width="220px"
        height="220px"
        style={{
          borderRadius: "50%",
          position: "relative",
          marginBottom: "-140px",
          marginLeft: "10px",
        }}
        src={val.image_url["url"]}
      />
      <Card
        className="dish-card"
        sx={{
          width: 240,
          height: 440,
          boxShadow: "gray 2px 5px 15px",
          paddingTop: "120px",
        }}
      >
        {/* <CardMedia
          component="img"
          width="auto"
          height="40%"
          image={val.image_url["url"]}
          alt={val.name}
          sx={{ border: "2px solid green", borderRadius: "5px" }}
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
          <Typography align="left" gutterBottom component="div">
            <span style={{ fontWeight: "600" }}>Servings</span>
            {`: ${val.servings}`}
          </Typography>
          <Typography align="left" gutterBottom component="div">
            <span style={{ fontWeight: "600" }}>Energy</span>
            {`: ${val.energy}g`}
          </Typography>
          <Typography align="left" gutterBottom component="div">
            <span style={{ fontWeight: "600" }}>Fats</span>
            {`: ${val.fats}g`}
          </Typography>
          <Typography align="left" gutterBottom component="div">
            <span style={{ fontWeight: "600" }}>Protein</span>
            {`: ${val.protein}g`}
          </Typography>
          <Typography align="left" gutterBottom component="div">
            <span style={{ fontWeight: "600" }}>Calories</span>
            {`: ${val.calories}g`}
          </Typography>

          <div style={{ marginTop: "10px" }}>
            {" "}
            {val["status"] == "remove" || cart ? (
              <Button fullWidth sx={{textTransform:"inherit"}} variant="contained" color="error" onClick={handleRemove}>
                Remove Dish
                {/* <CalendarMonthIcon
                  sx={{ marginTop: "-5px", marginLeft: "3px" }}
                  fontSize="small"
                /> */}
              </Button>
            ) : (
              <Button fullWidth sx={{textTransform:"inherit"}} variant="contained" color="success" onClick={handleAdd}>
                Add Dish
                {/* <CalendarMonthIcon
                  sx={{ marginTop: "-5px", marginLeft: "3px" }}
                  fontSize="small"
                /> */}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
});
