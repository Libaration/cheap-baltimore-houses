import { Card, Text } from "@nextui-org/react";
import Image from "next/future/image";
import Link from "next/link";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
const HomeCard = ({ home }) => {
  const address = `${home.attributes.street} ${
    home.attributes.street2 ? home.attributes.street2 : ""
  } ${home.attributes.city}, ${home.attributes.state} ${home.attributes.zip}`;
  return (
    <div className="home-card p-3">
      <Card
        css={{ maxHeight: "480px", backgroundColor: "transparent" }}
        variant="flat"
        isPressable
        isHoverable
      >
        <Card.Header>
          <Link href={`/homes/${encodeURIComponent(home.id)}`} passHref>
            <div style={{ width: "100%" }}>
              <a>
                <Image
                  loader={cloudinaryLoader}
                  src={`${home.attributes.cover_image.data.attributes.provider_metadata.public_id}`}
                  width={400}
                  height={300}
                  alt="home"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </Link>
        </Card.Header>
      </Card>
    </div>
  );
};
export default HomeCard;
