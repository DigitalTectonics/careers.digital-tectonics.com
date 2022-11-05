import { styled } from "@mui/system";
import { Button, Box, Paper } from "@mui/material";
import stockPhoto from "../../assets/shutterstock1.webp";

export const LandingContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "rgba(43,74,68,0.8)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    backgroundImage: `url(${stockPhoto})`,
    justifyContent: "flex-start",
  },
  backgroundSize: "cover",
}));

export const LandingSub = styled(Paper)(({ theme, mode }) => ({
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("xs")]: {
    width: "95vw",
    height: "90vh",
    background: "initial",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(4),
    width: "45vw",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background:
      mode === "dark" ? "rgba(43,74,68,0.5)" : "rgba(97,202,129, 0.5)",
  },
  [theme.breakpoints.up("xl")]: {
    wdith: "40vw",
    height: "40vh",
  },
  backdropFilter: "blur( 12px )",
  WebkitBackdropFilter: "blur( 12px )",
  borderRadius: "10px",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: "center",
  zIndex: "0",
}));

export const LandingMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "block",
    height: "35%",
    marginTop: "-8px",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
    height: "50%",
    marginTop: "-20px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  backgroundImage: `url(${stockPhoto})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
}));

export const SubHero = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundColor: "rgba(43,74,68,0.9)",
    border: "5px solid",
    width: "100vw",
    display: "flex",
    height: "60%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    height: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: "initial",
    border: "0px",
    width: "100%",
  },
  padding: theme.spacing(3),
  borderColor: "primary.main",
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  wdith: "100%",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

export const Icon = styled(Box)(({ theme }) => ({
  borderRadius: "100%",
  padding: theme.spacing(1),
}));

export const PositonsButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50px",
  padding: theme.spacing(3),
  width: "234px",
  marginTop: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
