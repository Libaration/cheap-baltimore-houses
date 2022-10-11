import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import HomeCard from "../components/HomeCard";
import RecentHomes from "../components/RecentHomes";
export default function Home(props) {
  return (
    <>
      <div>
        okok<div>ok</div>
      </div>
      <RecentHomes homes={props.data} />
    </>
  );
}
export async function getServerSideProps(context) {
  const fetchHomes = await fetch("http://localhost:1337/api/homes?populate=*");
  const response = await fetchHomes.json();
  const { data } = response;
  return { props: { data } };
}
