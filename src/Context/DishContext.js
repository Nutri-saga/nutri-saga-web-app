import React, { createContext, useEffect, useState } from "react";

export const DishContext = createContext();

export const DishProvider = (props) => {
  const [dishes, setDishes] = useState([]);

  const getDish = () => {
    const arr = JSON.parse(localStorage.getItem("dishes"));
    setDishes(arr);
  };

  const setDish = (dishDetails) => {
    let arr = [];
    if (localStorage.getItem("dishes")) {
      arr = JSON.parse(localStorage.getItem("dishes"));
    }
    const ans = [...arr, dishDetails];
    localStorage.setItem("dishes", JSON.stringify(ans));
    getDish();
  };

  const removeDish = (val) => {
    const arr = JSON.parse(localStorage.getItem("dishes"));
    const ans = arr.filter((dish) => dish._id != val._id);
    localStorage.setItem("dishes", JSON.stringify(ans));
    getDish();
  };

  const setShop = (val) =>{
    let arr = [];
    if(localStorage.getItem('shop')){
        arr = JSON.parse(localStorage.getItem('shop'))
        const ans = [...arr, val._id];
        localStorage.setItem('shop', JSON.stringify(ans))
    }else{
        arr.push(val._id);
        localStorage.setItem('shop', JSON.stringify(arr));
    }
  }

  const removeShop = (val) => {
    const arr = JSON.parse(localStorage.getItem("shop"));
    const ans = arr.filter((id) => id!==id);
    localStorage.setItem("shop", JSON.stringify(ans));
  };

  const getShop = () =>{
    const arr = JSON.parse(localStorage.getItem('shop'))
    return arr;
  }

  useEffect(() => {
    getDish();
  }, []);

  return (
    <DishContext.Provider
      value={{
        setDish,
        getDish,
        removeDish,
        setShop,
        getShop,
        removeShop,
        dishes,
      }}
    >
      {props.children}
    </DishContext.Provider>
  );
};
