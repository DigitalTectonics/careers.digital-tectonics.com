import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import logo from "../assets/logo.png";

const pages = ["Home", "Careers", "About Us", "Contact Us"];
const links = ["https://digital-tectonics.com", "careers", "about", "contact"];

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "100%",
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: "55px",
              height: "55px",
            }}
            src={logo}
            alt="digital tectonics logo"
            variant="square"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Mulish",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              "&:hover": {
                color: "#216C38",
              },
            }}
          >
            Digtal Tectonics
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="list of sections"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
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
              {pages.map((page, index) => (
                <MenuItem
                  component="a"
                  href={index === 0 ? `${links[index]}` : `#${links[index]}`}
                  target={index === 0 ? "_blank" : null}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      color: "#216C38",
                    },
                  }}
                >
                  <Typography fontFamily="poppins" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "7px",
            }}
            src={logo}
            alt="digital tectonics logo"
            variant="square"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
              "&:hover": {
                color: "#216C38",
              },
            }}
          >
            Digtal Tectonics
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  ml: 3,
                  "&:hover": {
                    color: "#216C38",
                  },
                }}
                component="a"
                target={index === 0 ? "_blank" : null}
                href={index === 0 ? `${links[index]}` : `#${links[index]}`}
              >
                <Typography fontFamily="poppins" textAlign="center">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
