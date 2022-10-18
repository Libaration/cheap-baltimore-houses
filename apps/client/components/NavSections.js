import styles from "../styles/NavSections.module.css";
import { Navbar, Text } from "@mantine/core";
const NavSections = () => {
  return (
    <>
      <Navbar.Section className={styles.navLinkText}>
        <li>
          <Text transform="uppercase" style={{ fontFamily: "Oakes" }}>
            1Find a Home
          </Text>
        </li>
      </Navbar.Section>
      <Navbar.Section className={styles.navLinkText}>
        <li>
          <Text transform="uppercase" style={{ fontFamily: "Oakes" }}>
            2Sell a Home
          </Text>
        </li>
      </Navbar.Section>
      <Navbar.Section className={styles.navLinkText}>
        <li>
          <Text transform="uppercase" style={{ fontFamily: "Oakes" }}>
            3Sell a Home
          </Text>
        </li>
      </Navbar.Section>
      <Navbar.Section className={styles.navLinkText}>
        <li>
          <Text transform="uppercase" style={{ fontFamily: "Oakes" }}>
            4Sell a Home
          </Text>
        </li>
      </Navbar.Section>
      <Navbar.Section className={styles.navLinkText}>
        <li>
          <Text transform="uppercase" style={{ fontFamily: "Oakes" }}>
            5Sell a Home
          </Text>
        </li>
      </Navbar.Section>
    </>
  );
};

export default NavSections;
