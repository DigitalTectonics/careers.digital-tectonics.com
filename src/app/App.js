import Landing from "../pages/landing/Landing";
import Careers from "../pages/services/Careers";
import Appbar from "../components/Appbar";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Footer";
import Contact from "../pages/contact/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Landing />
      <Careers />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
