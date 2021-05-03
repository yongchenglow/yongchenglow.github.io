import React, { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "../styles/global.scss";
import SiteLayout from "../components/SiteLayout";

const MyApp = ({ Component, pageProps, router }) => {
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
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
};

export default MyApp;
