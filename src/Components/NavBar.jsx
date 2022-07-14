import React, { useContext } from "react";

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
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Badge } from "@mui/material";

import { useNavigate, Link } from "react-router-dom";

import { DishContext } from "../Context/DishContext";
import { AuthContext } from "../Context/AuthContext";

import { purple } from "@mui/material/colors";

const pages = [];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = ({ handleMenu }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const { dishes } = useContext(DishContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleButton = (page) => {
    handleCloseNavMenu();
    if (page === "Home") {
      navigate(`/`);
    }
    if (page === "About") {
      navigate("/about");
    }
    if (page === "Blog") {
      navigate("/blogs");
    }
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
    handleMenu(open);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: "#1faa00" }}>
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
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

            <Link style={{textDecoration:"none"}} to="/">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} width="70" />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 4,
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontSize: "16px",
                    textShadow: "3px 3px gray",
                    color: "whitesmoke",
                  }}
                >
                  Nutri Saga{" "}
                </Typography>
              </div>
            </Link>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img width="200" src={logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleButton(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  display: "flex",
                  fontWeight: "500",
                }}
              >
                <span style={{ marginRight: "3px" }}>
                  {page == "Home" && <HomeIcon />}
                </span>
                <span style={{ marginRight: "3px" }}>
                  {page == "About" && <InfoIcon />}
                </span>
                <span style={{ marginRight: "3px" }}>
                  {page == "Blog" && <BorderColorIcon />}
                </span>
                {page}
              </Button>
            ))}
          </Box>
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
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                {user ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user.username.toString().toUpperCase().charAt(0)}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
