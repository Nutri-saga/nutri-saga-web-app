import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!!localStorage.getItem("user") && !!localStorage.getItem("token"))
      setUser(JSON.parse(localStorage.getItem("user")));
    else setUser(null);
  }, []);

  const state = {
    user,
  };

  return (
    <AuthContext.Provider value={{ user: state.user }}>
      {children}
    </AuthContext.Provider>
  );
};
