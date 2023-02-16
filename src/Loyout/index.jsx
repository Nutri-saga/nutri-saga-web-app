import React, { useContext } from "react";

//@mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

//react-router-dom
import { Link, Outlet, useLocation } from "react-router-dom";

//Context
import { AuthContext } from "../Contexts/AuthContext";
import {
  Avatar,
  Button,
  CssBaseline,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import styled from "@emotion/styled";
import { navLinks } from "../constants/navLinks";
import { matchPath } from "../utils/helper";

const drawerWidth = 240;

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  "& .logo-btn": {
    display: "flex",
    "& .menu-btn": {
      color: "#FFFFFF",
    },
    "& .menu-icon": {
      fontSize: "2rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.6rem",
      },
    },
    "& .logo-text": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .nutri": {
        background: "linear-gradient(#F49590, yellow)",
        color: theme.palette.primary.dark,
        borderTopLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        padding: "0.4rem",
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontSize: "20px",
        lineHeight: "18px",
        letterSpacing: "0.04em",
        [theme.breakpoints.down("xl")]: {
          fontSize: "18px",
        },
      },
      "& .saga": {
        padding: "0.4rem",
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontSize: "20px",
        lineHeight: "18px",
        letterSpacing: "0.04em",
        color: "#FFFFFF",
        [theme.breakpoints.down("xl")]: {
          fontSize: "18px",
        },
      },
    },
  },
}));

export default function SideBar(props) {
  const [open, setOpen] = React.useState(false);

  const { user } = useContext(AuthContext);

  const { pathname } = useLocation();

  const openSideBar = () => {
    setOpen((prev) => !prev);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
          bgcolor: "primary",
        }}
      >
        <StyledToolBar
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box className="logo-btn">
            <Button onClick={openSideBar} className="menu-btn" disableRipple>
              <MenuIcon className="menu-icon" />
            </Button>

            <Box className="logo-text">
              <Typography className="nutri">Nutri</Typography>
              <Typography className="saga">Saga</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Tooltip title="Dashboard">
                  {user ? (
                    <Link to="user/dashboard">
                      <Avatar
                        alt={user.username.toString().toUpperCase().charAt(0)}
                        src="/static/images/avatar/2.jpg"
                        sx={{ width: "2rem", height: "2rem" }}
                      />
                    </Link>
                  ) : (
                    <Link to="/user/login">Login</Link>
                  )}
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </StyledToolBar>
      </AppBar>

      <Drawer
        onMouseLeave={() => closeSideBar()}
        variant="permanent"
        sx={
          open
            ? {
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: (theme) => ({
                  width: drawerWidth,
                  boxSizing: "border-box",
                  backgroundColor: (theme) => theme.palette.primary.light,
                  overflow: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "0.2em",
                  },
                  "&::-webkit-scrollbar-track": {
                    marginTop: "12vh",
                    marginBottom: "70vh",
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#cccccc",
                  },
                }),
              }
            : { display: "none" }
        }
      >
        <List sx={{ pt: 10, pb: 4, pl: 0.2 }}>
          {navLinks.map((link) => {
            let Icon = link.icon;
            return (
              <Link to={`/app/${link.key}`}>
                <ListItemButton
                  disableRipple
                  disableGutters
                  sx={{
                    mb: 1,

                    borderRight: (theme) =>
                      matchPath(pathname, link.key)
                        ? `0.3rem solid ${theme.palette.primary.dark}`
                        : "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: (theme) =>
                        matchPath(pathname, link.key)
                          ? theme.palette.primary.dark
                          : theme.palette.primary.main,
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      [`& .MuiTypography-root`]: (theme) => ({
                        fontSize: { lg: "16px", xl: "18px" },
                        fontWeight: matchPath(pathname, link.key) ? 600 : 400,
                        color: matchPath(pathname, link.key)
                          ? theme.palette.primary.dark
                          : theme.palette.primary.main,
                      }),
                    }}
                  >
                    {link.text}
                  </ListItemText>
                </ListItemButton>
              </Link>
            );
          })}
        </List>
        <Toolbar />
      </Drawer>

      <Box component="main" sx={{ padding: "1rem", width: "100%", mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
