import "../styles/global.css";
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { builder } from "@builder.io/react";
import "@builder.io/widgets/dist/lib/builder-widgets-async";
import Head from "next/head";
builder.init(process.env.NEXT_PUBLIC_BUILDER_KEY);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#161724" />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
