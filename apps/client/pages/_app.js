import "../styles/argon-design-system-react.css";
import "../styles/nucleo/css/nucleo.css";
import "../styles/font-awesome/css/font-awesome.min.css";
import { MantineProvider } from "@mantine/core";
function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
