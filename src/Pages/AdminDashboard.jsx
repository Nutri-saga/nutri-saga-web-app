import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import { DishContext } from "../Context/DishContext";

import DishImg from "../assets/diet.png";
import CalendarImg from "../assets/schedule.png";
import Bag from '../assets/cart.png';
import { getDishes } from "../Context/ComponentActions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const { dishes, getShop } = useContext(DishContext);

  const navigate = useNavigate();

  const [dish, setDish] = useState(0);
  const [cart, setCart] = useState(0);
  const [shop, setShop] = useState(0);

  async function getData() {
    const { data } = await getDishes();
    setDish(data?.length);
    setCart(dishes?.length);
  }

  useEffect(() => {
    getData();
    const ans = getShop();
    setShop(parseInt(ans?.length)||0);

  }, []);

  return (
    <React.Fragment>
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ textAlign: "center" }}>
          {`WELCOME ${user.name.toString().toUpperCase()}`}{" "}
        </h1>
        <hr />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card
          sx={{ width: "200px", height: "220px", backgroundColor: "#f50057", boxShadow:"gray 2px 4px 5px" }}
        >
          <CardContent>
            <div style={{ width: "fit-content", margin: "auto" }}>
              <img src={DishImg} width={100} height={100} />
            </div>
            <Typography
              sx={{ color: "white", fontSize: "18px" }}
              align="center"
            >
              {" "}
              Nutri Dishes : {dish}
            </Typography>
            <hr />
            <div style={{ width: "fit-content", margin: "auto" }}>
              <ArrowForwardIosIcon
                onClick={() => navigate("/dishes")}
                sx={{ color: "white", fontSize: "34px", cursor: "pointer" }}
              />
            </div>
          </CardContent>
        </Card>
       
        <Card
          sx={{ width: "200px", height: "220px", backgroundColor: "#2196f3", boxShadow:"gray 2px 4px 5px" }}
        >
             <CardContent>
            <div style={{ width: "fit-content", margin: "auto" }}>
              <img src={Bag} width={100} height={100} />
            </div>
            <Typography
              sx={{ color: "white", fontSize: "18px" }}
              align="center"
            >
              {" "}
             Items  Shopped : {shop}
            </Typography>
            <hr />
            <div style={{ width: "fit-content", margin: "auto" }}>
              <ArrowForwardIosIcon
                onClick={() => navigate("/shoppinglist")}
                sx={{ color: "white", fontSize: "34px", cursor: "pointer" }}
              />
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{ width: "200px", height: "220px", backgroundColor: "#00e676", boxShadow:"gray 2px 4px 5px" }}
        >
             <CardContent>
            <div style={{ width: "fit-content", margin: "auto" }}>
              <img src={CalendarImg} width={100} height={100} />
            </div>
            <Typography
              sx={{ color: "white", fontSize: "18px" }}
              align="center"
            >
              {" "}
              Dish In Planner: {cart}
            </Typography>
            <hr />
            <div style={{ width: "fit-content", margin: "auto" }}>
              <ArrowForwardIosIcon
                onClick={() => navigate("/planner")}
                sx={{ color: "white", fontSize: "34px", cursor: "pointer" }}
              />
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{ width: "200px", height: "220px", backgroundColor: "#ff9100", boxShadow:"gray 2px 4px 5px" }}
        >
             <CardContent>
            <div style={{ width: "fit-content", margin: "auto" }}>
              <img src={DishImg} width={100} height={100} />
            </div>
            <Typography
              sx={{ color: "white", fontSize: "18px" }}
              align="center"
            >
              {" "}
              Update Dish
            </Typography>
            <hr />
            <div style={{ width: "fit-content", margin: "auto" }}>
              <ArrowForwardIosIcon
                onClick={() => navigate("/updatedish")}
                sx={{ color: "white", fontSize: "34px", cursor: "pointer" }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default AdminDashboard;
