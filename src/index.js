import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { DishProvider } from "./Context/DishContext";

import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DishProvider>
          <App />
        </DishProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
