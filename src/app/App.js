import Landing from "../pages/landing/Landing";
import About from "../pages/services/About";
import Appbar from "../components/Appbar";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Landing />
      <About />
    </ThemeProvider>
  );
}

export default App;
