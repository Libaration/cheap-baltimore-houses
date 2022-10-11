import { SimpleGrid } from "@mantine/core";
import HomeCard from "./HomeCard";
const renderHomes = (homes) => {
  return homes.map((home) => <HomeCard key={home.id} home={home} />);
};
const RecentHomes = (props) => {
  return (
    <SimpleGrid
      cols={4}
      spacing="xs"
      breakpoints={[
        { maxWidth: 1250, cols: 3, spacing: "lg" },
        { maxWidth: 992, cols: 2, spacing: "md" },
        { maxWidth: 868, cols: 2, spacing: "sm" },
        { maxWidth: 676, cols: 1, spacing: "xs" },
      ]}
    >
      {renderHomes(props.homes)}
    </SimpleGrid>
  );
};

export default RecentHomes;
