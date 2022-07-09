import React, { createContext } from "react";

export const DishContext = createContext();

export const DishProvider =(props) =>{
    return(
        <DishContext.Provider
         value={{
            name:"Vivek",
            age:"21"
         }}
        >
            {props.children}
        </DishContext.Provider>
    )
}
