import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Context's
import { AuthProvider } from "./Contexts/AuthContext";
import { DishProvider } from "./Contexts/DishContext";

import { BrowserRouter as Router } from "react-router-dom";

import GlobalCssOverride from "./ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalCssOverride>
      <Router>
        <AuthProvider>
          <DishProvider>
            <App />
          </DishProvider>
        </AuthProvider>
      </Router>
    </GlobalCssOverride>
  </React.StrictMode>
);
