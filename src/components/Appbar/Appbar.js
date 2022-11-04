import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
} from "@mui/material";
import logo from "../../assets/logo.png";
import {
  LogoDesktop,
  DigitalDesktop,
  MenuContainer,
  LogoMobile,
  DigitalMobile,
  NavMenu,
} from "./styles";

const pages = ["Home", "Careers", "About Us", "Contact Us"];
const links = ["https://digital-tectonics.com", "careers", "about", "contact"];

export default function Appbar({ children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "primary.main" }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop
            src={logo}
            alt="digital tectonics logo"
            variant="square"
          />
          <DigitalDesktop
            color="primary.text"
            variant="h5"
            noWrap
            component="a"
            href="/"
          >
            Digital Tectonics
          </DigitalDesktop>
          <MenuContainer>
            <IconButton
              size="large"
              aria-label="list of sections"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "primary.darkGreen" }}
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
                    color: "primary.text",
                  }}
                >
                  <Typography fontFamily="poppins" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>{children}</MenuItem>
            </Menu>
          </MenuContainer>
          <LogoMobile
            src={logo}
            alt="digital tectonics logo"
            variant="square"
          />
          <DigitalMobile
            variant="h6"
            noWrap
            component="a"
            href=""
            color="primary.text"
          >
            Digtal Tectonics
          </DigitalMobile>
          <NavMenu>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  display: "block",
                  ml: 1,
                  color: "primary.text",
                  "&:hover": {
                    color: "white",
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
            <Button
              sx={{
                my: 1,
                display: "block",
                ml: 1,
                color: "primary.text",
              }}
            >
              {children}
            </Button>
          </NavMenu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
