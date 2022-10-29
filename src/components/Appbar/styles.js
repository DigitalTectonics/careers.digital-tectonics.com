import { styled } from "@mui/system";
import { Avatar, Typography, Box } from "@mui/material";

export const LogoDesktop = styled(Avatar)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: "100%",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  marginRight: theme.spacing(1),
  width: "55px",
  height: "55px",
}));

export const LogoMobile = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  marginRight: theme.spacing(1),
}));

export const DigitalDesktop = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  fontFamily: "Mulish",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
}));

export const DigitalMobile = styled(Typography)(({ theme }) => ({
  mr: theme.spacing(2),
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".1rem",
  textDecoration: "none",
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const NavMenu = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  justifyContent: "flex-end",
}));
