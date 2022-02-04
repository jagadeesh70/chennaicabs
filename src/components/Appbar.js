import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BiMenu } from "react-icons/bi";
import Menu from "@mui/material/Menu";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const history = useNavigate();

  const pushHistory = (url) => {
    handleCloseNavMenu();
    history(url);
  };

  return (
    <AppBar style={{ background: "rgb(150, 224, 12)" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                WebkitTextStrokeWidth: "0.3px",
                WebkitTextStrokeColor: "black",
              }}
              className="header__lgo fr"
            >
              <img
                style={{
                  height: "3rem",
                  width: "3rem",
                  marginRight: ".5rem",
                }}
                src={logo}
                alt=""
              />
              Chennai Cabs
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BiMenu />
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
              <MenuItem onClick={() => pushHistory("/")}>Home</MenuItem>
              <MenuItem onClick={() => pushHistory("/contactus")}>
                Contact us
              </MenuItem>
              <MenuItem onClick={() => pushHistory("/aboutus")}>
                About Us
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <div
              style={{ justifyContent: "center", alignItems: "center" }}
              className="header__lgo fr"
            >
              <img
                style={{
                  height: "3rem",
                  width: "3rem",
                  marginRight: ".5rem",
                }}
                src={logo}
                alt=""
              />
              Chennai Cabs
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {" "}
              <Link to="/ContactUs">Contact us</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/AboutUs">About us</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
