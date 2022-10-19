import RecentHomes from "../components/RecentHomes";
import { useState } from "react";
import Headroom from "react-headroom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
  Title,
  Group,
} from "@mantine/core";
import Image from "next/future/image";
import styles from "../styles/Index.module.css";
import NavSections from "../components/NavSections";
import TimelineSection from "../components/TimelineSection";
export default function Index(props) {
  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { stiffness: 300, damping: 200 });
  const y = useTransform(ySpring, [0, 1000], [0, 500]);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [sideNavOpened, setSideNavOpened] = useState(false);
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src="https://wallpaper.dog/large/10989205.jpg"
          style={{ zIndex: -3 }}
          fill
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

        <Grid
          pb={"2rem"}
          mt={"0.5rem"}
          style={{ width: "100%", height: "100vh", paddingLeft: "1rem" }}
        >
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
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <motion.div style={{ x: y }}>
              <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <Image
                  src="/cloud.png"
                  height={100}
                  width={120}
                  style={{ position: "relative", zIndex: 1, top: "9rem" }}
                  alt=""
                />
              </MediaQuery>
            </motion.div>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Image
                src="https://www.pngmart.com/files/16/Vector-Modern-House-PNG-Transparent-Image.png"
                height={400}
                width={400}
                alt=""
                style={{
                  marginTop: "1rem",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: -1,
                  left: "-6rem",
                }}
              />
            </MediaQuery>
            <div
              style={{
                width: "50%",
                height: "auto",
                marginRight: "6rem",
                textAlign: "right",
                alignSelf: "center",
              }}
            >
              <img src="/cloud.png" alt="" />
            </div>
          </div>
        </Grid>
      </AppShell>

      <MediaQuery smallerThan="sm" styles={{ marginTop: "1.5rem" }}>
        <div style={{ backgroundColor: "white", height: "100%" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <RecentHomes homes={props.data} max={3} />
          </motion.div>
        </div>
      </MediaQuery>
    </>
  );
}
export async function getServerSideProps(context) {
  const fetchHomes = await fetch("http://localhost:1337/api/homes?populate=*");
  const response = await fetchHomes.json();
  const { data } = response;
  return { props: { data } };
}
