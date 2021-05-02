import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/header/header";
import "../styles/global.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <React.Fragment>
      <Header />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
