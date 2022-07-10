import React, { useContext } from "react";
import ShopList from "../Components/ShopList";
import { Card } from "@mui/material";

import { DishContext } from "../Context/DishContext";
import ShopBag from "../assets/cart.png";

import Typography from "@mui/material/Typography";

export default function ShoppingList() {
  const { dishes } = useContext(DishContext);
  return (
    <div>
      <Card
        sx={{ width: "80%", margin: "auto", boxShadow: "gray 2px 5px 15px" }}
      >
        <div style={{ width: "fit-content", margin: "auto" }}>
          <img style={{ width: "100px" }} src={ShopBag} />
          <Typography
            sx={{ letterSpacing: "0.02em", fontWeight: "600" }}
            color="primary"
            align="center"
          >
            Shopping Bag
          </Typography>
        </div>
        <hr />
        <div style={{ height: "55vh", overFlowY: "scroll" }}>
          {dishes.length <= 0 ? (
            <div
              style={{
                width: "fit-content",
                margin: "auto",
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "40px",
              }}
            >
              Nothing to shop ☹️
            </div>
          ) : (
            <div>
              {dishes.map((val, indx) => (
                <ShopList key={indx} val={val} />
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
