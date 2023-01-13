import "../styles/global.css";
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import initMocks from "../mocks";
if (process.env.NEXT_PUBLIC_ENABLE_MOCK === "true") {
  require("../mocks");
  await initMocks();
}

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      link: "#ffffff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
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
      <ParallaxProvider>{getLayout(<Component {...pageProps} />)}</ParallaxProvider>
    </NextUIProvider>
  );
}

export default MyApp;
