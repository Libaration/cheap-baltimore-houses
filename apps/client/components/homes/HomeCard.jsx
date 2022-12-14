import { Card, Text } from "@nextui-org/react";
import Image from "next/future/image";
import { Button } from "primereact/button";
import Link from "next/link";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
const HomeCard = ({ home }) => {
  const address = `${home.attributes.street} ${
    home.attributes.street2 ? home.attributes.street2 : ""
  } ${home.attributes.city}, ${home.attributes.state} ${home.attributes.zip}`;
  return (
    <div className="home-card p-3">
      <Card css={{ maxHeight: "480px" }}>
        <Card.Header>
          <Link href={`/homes/${encodeURIComponent(home.id)}`} passHref>
            <Image
              loader={cloudinaryLoader}
              src={`${home.attributes.cover_image.data.attributes.provider_metadata.public_id}`}
              width={400}
              height={300}
              alt="home"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Card.Header>
        <Card.Body>
          <Text
            css={{
              fontWeight: "bold",
            }}
          >
            {address}
          </Text>
          <Text
            css={{
              fontWeight: "normal",
              fontSize: "small",
              color: "gray",
              verticalAlign: "middle",
            }}
          ></Text>
        </Card.Body>
        <Card.Footer css={{ justifyContent: "center" }}>
          <Link href={`/homes/${encodeURIComponent(home.id)}`} passHref>
            <Button className="make-an-offer-button">More Info</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default HomeCard;
