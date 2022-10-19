import NavBar from "../components/NavBar";
export default function Index(props) {
  return (
    <div className="main">
      <div className="backgroundHero">
        <NavBar />
        <div>abcdefg</div>
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
