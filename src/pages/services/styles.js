import { styled } from "@mui/system";
import { Box, Paper, Typography } from "@mui/material";

export const CareersContainer = styled(Box)(({ theme }) => ({
  scrollMarginTop: "4em",
  zIndex: "1000",
  paddingBottom: theme.spacing(20),
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderTop: "20px solid #E6C574",
}));

export const CardsContainer = styled(Paper)(({ theme }) => ({
  zIndex: "0",
  padding: theme.spacing(2),
  [theme.breakpoints.up("xs")]: {
    borderRadius: "20px",
  },
  [theme.breakpoints.up("md")]: {
    borderRadius: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    borderRadius: "40px",
  },
  width: "90%",
  marginTop: theme.spacing(4),
  border: "4px solid",
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  [theme.breakpoints.up("xs")]: {
    fontSize: "2em",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3em",
  },
  zIndex: "100",
  marginBottom: theme.spacing(2),
}));
