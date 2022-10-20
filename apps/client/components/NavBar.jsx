import styles from "../styles/NavBar.module.css";
import Image from "next/future/image";
import logo from "../public/logo.png";
const NavBar = ({ navBarRef }) => {
  const css = { width: "auto", height: "auto" };
  return (
    <div className={styles.navMain} ref={navBarRef}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" css={css} />
      </div>
    </div>
  );
};

export default NavBar;
