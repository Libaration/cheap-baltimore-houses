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
        <Header height={70} p="md" className={styles.topNav}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text className="headerText">CheapBaltimoreHouses</Text>
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
      >
        {/* <RecentHomes homes={props.data} /> */}
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
