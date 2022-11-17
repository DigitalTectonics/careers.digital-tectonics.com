import React from "react";
import Landing from "../pages/landing/Landing";
import Careers from "../pages/services/Careers";
import Appbar from "../components/Appbar/Appbar";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import Contact from "../pages/contact/Contact";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function SwitchMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        bgcolor: "background.main",
        color: "text",
      }}
      onClick={colorMode.toggleColorMode}
    >
      <Typography fontFamily="Mulish" textAlign="center">
      {theme.palette.mode === "dark" ? "Dark" : "Light"} Mode
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon sx={{ ml: "5px" }} />
      ) : (
        <Brightness4Icon sx={{ ml: "5px" }} />
      )}
      </Typography>
    </Box>
  );
}

function App() {
  const [mode, setMode] = React.useState(
    useMediaQuery("(prefers-color-scheme: dark)") === true ? "dark" : "light"
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#D7FFDF",
            text: "#396358",
            landing: "#ACE6C0",
            ...(mode === "dark" && {
              main: "#163832",
              text: "#C7DDD1",
              landing: "#235347",
            }),
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Appbar>
          <SwitchMode />
        </Appbar>
        <Landing mode={mode} />
        <Careers mode={mode} />
        <Contact mode={mode} />
        <Footer color={theme.palette} mode={mode} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
