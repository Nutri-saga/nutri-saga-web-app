import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./Components/SideBar";
import Approuter from "./utils/Approuter";

function App() {
  return (
    <SideBar>
      <Approuter />
    </SideBar>
  );
}

export default App;
