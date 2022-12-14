import HomeCard from "../HomeCard";

export const renderRecentHomes = (homes) => {
  return homes.map((home) => {
    return (
      <div key={`HOME_${home.id}`}>
        <HomeCard home={home} />
      </div>
    );
  });
};
