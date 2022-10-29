import { styled } from "@mui/system";
import { Box, Paper } from "@mui/material";

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
  [theme.breakpoints.up("xs")]: {
    borderRadius: "20px",
    padding: theme.spacing(1),
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5),
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
