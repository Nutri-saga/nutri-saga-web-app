import React, { useState, useEffect } from "react";

//Context
export const AuthContext = React.createContext();

//Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  //useEffect
  useEffect(() => {
    updateUser();
  }, []);

  //logout function
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  //update user function
  const updateUser = () => {
    if (!!localStorage.getItem("user") && !!localStorage.getItem("token")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser(null);
    }
  };

  //initial state
  const state = {
    user,
  };

  //jsx
  return (
    <AuthContext.Provider
      value={{ user: state.user, logout: handleLogout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
