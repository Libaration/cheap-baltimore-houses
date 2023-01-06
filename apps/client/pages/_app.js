import "../styles/global.css";
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { builder } from "@builder.io/react";
import "@builder.io/widgets/dist/lib/builder-widgets-async";
import Head from "next/head";
import { NextUIProvider, createTheme } from "@nextui-org/react";
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      link: "#ffffff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-title" content="CheapBaltimoreHouses" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </NextUIProvider>
  );
}

export default MyApp;
