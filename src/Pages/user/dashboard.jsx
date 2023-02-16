import React, { useContext } from "react";
import CustomButton from "../../Components/Buttons/CustomButton";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>{user && <CustomButton onClick={logout}>Logout</CustomButton>}</div>
  );
}
