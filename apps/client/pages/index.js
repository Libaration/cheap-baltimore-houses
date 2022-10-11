import RecentHomes from "../components/RecentHomes";
import { useState } from "react";
import Headroom from "react-headroom";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  Card,
  useMantineTheme,
} from "@mantine/core";
import styles from "../styles/Index.module.css";
import NavSections from "../components/NavSections";
console.log(styles);
export default function Index(props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [sideNavOpened, setSideNavOpened] = useState(false);
  return (
    <>
      <Headroom>
        <Header height={80} p="md" className={styles.topNav}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery
              largerThan="sm"
              styles={{ display: "none", textAlign: "left" }}
            >
              <Burger
                size="lg"
                color="#bfb087"
                style={{
                  paddingBottom: "0.7rem",
                }}
                opened={opened}
                onClick={() => setSideNavOpened((o) => !o)}
              />
            </MediaQuery>

            <MediaQuery
              smallerThan="sm"
              styles={{ flex: 1, textAlign: "center" }}
            >
              <Text
                variant="gradient"
                gradient={{ from: "#bfb087", to: "#9a7650" }}
                className="headerText"
              >
                CheapBaltimoreHouses
              </Text>
            </MediaQuery>

            <Navbar
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 576, md: 768, lg: 992, xl: 1200 }}
              height="auto"
              style={{
                backgroundColor: "inherit",
                flexDirection: "row",
                border: "none",
              }}
              className={styles.navLinks}
            >
              <NavSections />
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
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!sideNavOpened}
            className={styles.sideNav}
            style={{
              display: sideNavOpened ? "flex" : "none",
            }}
          >
            <NavSections />
          </Navbar>
        }
      >
        <Card shadow="sm" pb="lg" radius="md">
          <RecentHomes homes={props.data} />
        </Card>
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
