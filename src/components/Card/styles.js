import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const CardContainer = styled(Paper)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(4),
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
}));

export const CardContent = styled(Paper)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(4),
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%"
}));
