import RecentHomes from "../components/RecentHomes";
import { useState } from "react";
import Headroom from "react-headroom";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  Group,
  Card,
  useMantineTheme,
} from "@mantine/core";
import styles from "../styles/Index.module.css";
console.log(styles);
export default function Index(props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Headroom>
        <Header height={80} p="md" className={styles.topNav}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text
              variant="gradient"
              gradient={{ from: "#bfb087", to: "#9a7650" }}
              className="headerText"
            >
              CheapBaltimoreHouses
            </Text>

            <Navbar
              height="auto"
              width="100%"
              style={{
                backgroundColor: "inherit",
                flexDirection: "row",
                border: "none",
              }}
              className={styles.navLinks}
            >
              <Navbar.Section className={styles.navLinkText}>
                <Text transform="uppercase">Find a Home</Text>
              </Navbar.Section>
              <Navbar.Section className={styles.navLinkText}>
                <Text transform="uppercase">Sell a Home</Text>
              </Navbar.Section>
              <Navbar.Section className={styles.navLinkText}>
                <Text transform="uppercase">Sell a Home</Text>
              </Navbar.Section>
              <Navbar.Section className={styles.navLinkText}>
                <Text transform="uppercase">Sell a Home</Text>
              </Navbar.Section>
              <Navbar.Section className={styles.navLinkText}>
                <Text transform="uppercase">Sell a Home</Text>
              </Navbar.Section>
            </Navbar>
          </div>
        </Header>
      </Headroom>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        className={styles.appShellMain}
      >
        <Card shadow="sm" pb="lg" radius="md" withBorder background="red">
          <RecentHomes homes={props.data} />
        </Card>
        <Text>JDWKSDJKSDHKSDKSDKSKKDSH</Text>
      </AppShell>
    </>
  );
}
export async function getServerSideProps(context) {
  const fetchHomes = await fetch("http://localhost:1337/api/homes?populate=*");
  const response = await fetchHomes.json();
  const { data } = response;
  return { props: { data } };
}
