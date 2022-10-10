import Landing from "../pages/landing/Landing";
import Careers from "../pages/services/Careers";
import Appbar from "../components/Appbar";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Landing />
      <Careers />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
