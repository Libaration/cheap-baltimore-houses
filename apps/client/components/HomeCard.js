import { Card, Image, Text, Badge, Button, Group, Center } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import remarkGfm from "remark-gfm";
import Link from "next/link";
const HomeCard = (props) => {
  const { home } = props;
  return (
    <Card shadow="sm" pb="lg" radius="md" withBorder>
      <Link href={`/homes/${encodeURIComponent(home.id)}`} passHref>
        <Card.Section>
          <Center>
            <Image
              src={
                home.attributes.cover_image.data.attributes.formats.medium.url
              }
              height={300}
              width={400}
              alt="house image"
              fit="contain"
              style={{ cursor: "pointer" }}
            />
          </Center>
        </Card.Section>
      </Link>
      <Link href={`/homes/${encodeURIComponent(home.id)}`} passHref>
        <Group position="apart" mt="md" mb="xs" style={{ cursor: "pointer" }}>
          <Text weight={500}>{home.attributes.street}</Text>

          <Badge color="green" variant="light">
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(home.attributes.price)}
          </Badge>
        </Group>
      </Link>
      {/* <Text size="xs" color="dimmed" lineClamp={4}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {home.attributes.description}
        </ReactMarkdown>
      </Text> */}

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Make an Offer
      </Button>
    </Card>
  );
};

export default HomeCard;
