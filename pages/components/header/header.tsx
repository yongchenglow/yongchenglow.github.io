import Head from "next/head";
import { GA_TRACKING_ID } from "../../../lib/gtag";

export const Header = (): JSX.Element => (
  <Head>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `,
      }}
    />

    {/* For SEO */}
    <title>Yong Cheng Low</title>
    <link rel="icon" href="images/YongCheng.jpg" />
    <meta name="author" content="Yong Cheng Low" />
    <meta
      name="description"
      content="Hi, I am Yong Cheng, also known as YC, welcome to my site!"
    />
    <meta
      name="keywords"
      content="Yong Cheng Low, Singapore, Software Engineer, Web Developer, Sports Enthusiast"
    />

    {/* For Social Media */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yongchenglow.github.io" />
    <meta property="og:image" content="images/YongCheng.jpg" />
    <meta property="og:title" content="Yong Cheng Low" />
    <meta
      property="og:description"
      content="Hi, I am Yong Cheng, also known as YC, welcome to my site!"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </Head>
);

export default Header;
