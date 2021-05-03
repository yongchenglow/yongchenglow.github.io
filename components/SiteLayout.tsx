import ButtonAppBar from "../components/appbar/navbar";
import Footer from "../components/footer/footer";
import { ThemeProvider } from "@material-ui/core/styles";
import LightTheme from "../src/LightTheme";
import DarkTheme from "../src/DarkTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useState } from "react";
import Header from "./header/header";

const SiteLayout = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkState, setDarkState] = useState(prefersDarkMode);
  const [init, setInit] = useState(true);
  var themeConfig = (init ? prefersDarkMode : darkState)
    ? DarkTheme
    : LightTheme;

  const handleThemeChange = () => {
    if (init) {
      setDarkState(!prefersDarkMode);
      setInit(false);
    } else {
      setDarkState(!darkState);
    }
  };

  return (
    <ThemeProvider theme={themeConfig}>
      <Header />
      <CssBaseline />
      <ButtonAppBar darkState={darkState} onChange={handleThemeChange} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default SiteLayout;
