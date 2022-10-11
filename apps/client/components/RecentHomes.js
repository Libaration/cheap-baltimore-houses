import { SimpleGrid } from "@mantine/core";
import HomeCard from "./HomeCard";
const renderHomes = (homes) => {
  return homes.map((home) => <HomeCard key={home.id} home={home} />);
};
const RecentHomes = (props) => {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {renderHomes(props.homes)}
    </SimpleGrid>
  );
};

export default RecentHomes;
