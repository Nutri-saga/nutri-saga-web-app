import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./Components/SideBar";
import Approuter from "./utils/Approuter";
import { DishProvider } from "./Context/DishContext";

function App() {
  return (
    <Router>
        <SideBar>
          <Approuter />
        </SideBar>
    </Router>
  );
}

export default App;
