import "../styles/global.css";
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ParallaxProvider } from "react-scroll-parallax";
function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
