import { styled } from "@mui/system";
import { Button, Box, Paper } from "@mui/material";
import stockPhoto from "../../assets/shutterstock1.jpg";

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
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(4),
    width: "45vw",
    height: "60vh",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: "center",
  zIndex: "0",
}));

export const LandingMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "block",
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  backgroundImage: `url(${stockPhoto})`,
  backgroundSize: "cover",
  height: "30vh",
  width: "100%",
  borderRadius: "30px",
  marginBottom: theme.spacing(3),
  border: "5px solid",
}));

export const SubHero = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundColor: "rgba(43,74,68,0.9)",
    border: "10px solid",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: "initial",
    border: "0px",
  },
  padding: theme.spacing(3),
  borderColor: "primary.main",
  borderRadius: "30px",
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
  backgroundColor: "#E6C574",
  borderRadius: "50px",
  padding: theme.spacing(3),
  width: "234px",
  marginTop: theme.spacing(1),
}));
