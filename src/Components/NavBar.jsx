import React, { useContext } from "react";

//@mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/nutrisaga.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Badge } from "@mui/material";

//@react-router-dom
import { useNavigate, Link } from "react-router-dom";

//Context
import { DishContext } from "../Contexts/DishContext";
import { AuthContext } from "../Contexts/AuthContext";

const NavBar = ({ handleMenu }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const { dishes } = useContext(DishContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
    handleMenu(open);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: "#1faa00" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "-8px",
            }}
          >
            <Button
              sx={{ color: "white", marginRight: "50px" }}
              onClick={handleClick}
            >
              <MenuIcon sx={{ fontSize: "40px" }} />
            </Button>

            <Link style={{ textDecoration: "none" }} to="/">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img alt="" src={logo} width="60" />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    ml: 1,
                    fontFamily: "cursive",
                    fontWeight: 700,
                    letterSpacing: "0.1rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontSize: "16px",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      background: "linear-gradient(#F49590, yellow)",
                      marginRight: "0.3rem",
                      color: "#1faa00",
                      padding: "0.5rem",
                      fontFamily: "cursive",
                      borderRadius: "4px",
                    }}
                  >
                    Nutri
                  </span>
                  Saga
                </Typography>
              </div>
            </Link>
          </div>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginRight: "40px" }}>
              <Badge
                max={10}
                badgeContent={dishes?.length > 0 ? dishes.length : "0"}
                color="error"
              >
                <CalendarMonthIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/planner")}
                />
              </Badge>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Tooltip title="My Account">
                  {user ? (
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ fontSize: "12px" }}
                    >
                      <Avatar
                        alt={user.username.toString().toUpperCase().charAt(0)}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ fontSize: "12px" }}
                    >
                      <Avatar />
                    </IconButton>
                  )}
                </Tooltip>
                {user ? (
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem key={1} onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={() => navigate("/profile")}
                        textAlign="center"
                      >
                        Profile
                      </Typography>
                    </MenuItem>
                    <MenuItem key={2} onClick={handleCloseUserMenu}>
                      <Typography onClick={logout} textAlign="center">
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                ) : (
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={() => navigate("/login")}
                        textAlign="center"
                      >
                        Login
                      </Typography>
                    </MenuItem>
                  </Menu>
                )}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
