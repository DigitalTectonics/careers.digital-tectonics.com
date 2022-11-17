import { styled } from "@mui/system";
import { Box, Paper, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  scrollMarginTop: "15em",
  paddingBottom: theme.spacing(11),
  position: "relative",
}));

export const SubContactContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(3),
  zIndex: "100",
  border: "5px solid #E6B53B",
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(2),
    fontSize: "2em",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3em",
  },
  zIndex: "100",
  marginTop: "-100px",
}));
