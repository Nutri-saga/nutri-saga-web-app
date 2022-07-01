import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import SideBar from '../Components/SideBar'

function AdminDashboard({logout, user}) {
  return (
    <>
    <SideBar user={user}/>
    </>
  )
}

function UserDashboard() {
  return <div>User Dashboard</div>;
}

function Dashboard() {
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      {user.userType == "admin" ? (
        <AdminDashboard logout={logout}  user={user}/>
      ) : (
        <UserDashboard logout />
      )}
    </>
  );
}

export default Dashboard;
