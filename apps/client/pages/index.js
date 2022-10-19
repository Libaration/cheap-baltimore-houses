import NavBar from "../components/NavBar";
export default function Index(props) {
  return (
    <div className="main">
      <div className="backgroundHero">
        <div className="text-center">
          <h4 className="smallHeroText">Cheap Baltimore Houses </h4>
          <h1 className="heroText">Cheap</h1>
          <h1 className="heroText">Baltimore</h1>
          <h1 className="heroText">Houses</h1>
        </div>

        <NavBar />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const fetchHomes = await fetch("http://localhost:1337/api/homes?populate=*");
  const response = await fetchHomes.json();
  const { data } = response;
  return { props: { data } };
}
