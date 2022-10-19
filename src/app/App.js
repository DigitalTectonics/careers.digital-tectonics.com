import React from "react";
import Landing from "../pages/landing/Landing";
import Careers from "../pages/services/Careers";
import Appbar from "../components/Appbar/Appbar";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import Contact from "../pages/contact/Contact";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { amber, deepOrange, grey } from "@mui/material/colors";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function SwitchMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

function App() {
  const [mode, setMode] = React.useState("light");
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
            main: "#FFF",
            text: "#216C38",
            landing: "#61ca81",
            ...(mode === "dark" && {
              main: "#0A1929",
              text: "white",
              landing: "#2E2E57",
            }),
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Appbar />
        <Landing mode={mode} />
        <Careers mode={mode} />
        <SwitchMode />
        <Contact mode={mode} />
        <Footer mode={theme.palette} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
