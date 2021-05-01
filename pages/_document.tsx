import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Header />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
