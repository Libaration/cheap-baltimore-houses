import HomeCard from "../HomeCard";

const renderHomeCard = (home) => {
  return (
    <div key={`HOME_${home.id}`}>
      <HomeCard home={home} />
    </div>
  );
};

export const renderRecentHomes = (homes) => {
  return homes.map(renderHomeCard);
};
