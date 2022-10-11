import { SimpleGrid } from "@mantine/core";
import HomeCard from "./HomeCard";
const renderHomes = (homes) => {
  return homes.map((home) => <HomeCard key={home.id} home={home} />);
};
const RecentHomes = (props) => {
  return (
    <SimpleGrid
      cols={3}
      spacing="xs"
      breakpoints={[
        { maxWidth: 1400, cols: 3, spacing: "md" },
        { maxWidth: 1300, cols: 2, spacing: "sm" },
        { maxWidth: 900, cols: 1, spacing: "sm" },
      ]}
    >
      {renderHomes(props.homes)}
    </SimpleGrid>
  );
};

export default RecentHomes;
