import ButtonAppBar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import LightTheme from "../src/LightTheme";
import DarkTheme from "../src/DarkTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useState, useEffect } from "react";

const Home = () => {
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
      <CssBaseline />
      <ButtonAppBar darkState={darkState} onChange={handleThemeChange} />
      <Body />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
