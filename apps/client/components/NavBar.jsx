import styles from "../styles/NavBar.module.css";
import Image from "next/future/image";
import logo from "../public/logo.png";
import { Parallax } from "react-scroll-parallax";
const NavBar = () => {
  const css = { width: "auto", height: "auto" };

  return (
    <Parallax style={{ background: "blue", zIndex: 99 }} speed={15}>
      sdsdsds
      <div className={styles.logo}>
        <Image src={logo} alt="logo" css={{ ...css }} />
      </div>
    </Parallax>
  );
};

export default NavBar;
