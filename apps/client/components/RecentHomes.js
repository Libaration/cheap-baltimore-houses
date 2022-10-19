import { SimpleGrid, Indicator, Center } from "@mantine/core";
import { Grid } from "@nextui-org/react";
import HomeCard from "./HomeCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const renderHomes = (homes, count) => {
  let total = 0;
  return homes.map((home) => {
    total = total + 1;
    if (total > count) {
      return;
    }
    return (
      <motion.div variants={item} key={home.id}>
        <HomeCard home={home} />
      </motion.div>
    );
  });
};
const RecentHomes = (props) => {
  return (
    <Indicator
      inline
      label="Recent Homes"
      size={34}
      position="top-center"
      color="dark"
      radius="xs"
      className="recent-homes-indicator"
      style={{ height: "100%" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {/* <SimpleGrid
          cols={4}
          spacing="xs"
          breakpoints={[
            { maxWidth: 1250, cols: 3, spacing: "lg" },
            { maxWidth: 992, cols: 2, spacing: "md" },
            { maxWidth: 868, cols: 2, spacing: "sm" },
            { maxWidth: 676, cols: 1, spacing: "xs" },
          ]}
        > */}

        <Grid.Container
          gap={1}
          justify="center"
          style={{ width: "100vw", marginTop: "1rem" }}
        >
          {renderHomes(props.homes, props.max)}
        </Grid.Container>

        {/* </SimpleGrid> */}
      </motion.div>
    </Indicator>
  );
};

export default RecentHomes;
