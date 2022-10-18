import RecentHomes from "../components/RecentHomes";
import { useState } from "react";
import Headroom from "react-headroom";
import { motion, useScroll } from "framer-motion";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  Card,
  useMantineTheme,
  Container,
  Grid,
  Box,
  Center,
} from "@mantine/core";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import NavSections from "../components/NavSections";
import TimelineSection from "../components/TimelineSection";
console.log(styles);
export default function Index(props) {
  const { scrollYProgress } = useScroll();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [sideNavOpened, setSideNavOpened] = useState(false);
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src="https://wallpaper.dog/large/10989205.jpg"
          layout="fill"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="whocares"
          className={styles.pageOneBgImage}
        />
      </div>
      <Headroom style={{ zIndex: 2 }}>
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
        <Card
          shadow="sm"
          style={{
            zIndex: 1,
            backgroundColor: "black",
            opacity: 0.8,
            borderRadius: "0px",
          }}
        >
          <span style={{ color: "white" }}>
            We pay all closing costs! Here is how it works
          </span>
        </Card>
        <Grid mt="1rem" pl={"1rem"} style={{ width: "100%" }}>
          <Grid.Col md={6} lg={4}>
            <Card>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl,
              nec aliquam nisl nisl sit amet nisl. Donec tincidunt, nisl eget
              aliquam
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card>
              <TimelineSection />
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl,
              nec aliquam nisl nisl sit amet nisl. Donec tincidunt, nisl eget
              aliquam
            </Card>
          </Grid.Col>
        </Grid>
      </AppShell>
      <div style={{ backgroundColor: "white", height: "100%" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Container py="lg" px="lg" size="lg">
            <Card shadow="sm" pb="lg" radius="md">
              <RecentHomes homes={props.data} max={4} />
            </Card>
          </Container>
        </motion.div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const fetchHomes = await fetch("http://localhost:1337/api/homes?populate=*");
  const response = await fetchHomes.json();
  const { data } = response;
  return { props: { data } };
}
