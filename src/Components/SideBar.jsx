import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Navbar from "./NavBar";
import { Typography } from "@mui/material";
import { SidebarData } from "./SidebarData";
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Icons({type}){
  return(
    <>
      {type==="add" && <AddIcon sx={{color:"#1faa00"}} />}
      {type==="menu" && <MenuBookIcon sx={{color:"#1faa00"}}/>}
      {type==="planner" && <CalendarMonthIcon sx={{color:"#1faa00"}}/>}
      {type==="shop" && <ShoppingBagIcon sx={{color:"#1faa00"}}/>}
    </>
  )
}

export default function SideBar(props) {

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        color="primary"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", marginTop:"20px"}}>
          <List>
            {SidebarData.map((item, index) => (
              <ListItem key={index} >
                <ListItemButton onClick={()=>item.onClick(navigate)} >
                  <ListItemIcon >
                    <Icons type={item.text} />
                  </ListItemIcon>
                  <Typography sx={{fontWeight:"600", color:"#1faa00"}}>{item?.title}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{padding:"90px 8px 8px 8px", width:"100%"}}>
       {props.children}
      </Box>
    </Box>
  );
}