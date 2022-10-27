import { Card, Col, Row, Button, Text, Grid, Badge } from "@nextui-org/react";
import { Center } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import remarkGfm from "remark-gfm";
import Link from "next/link";
const HomeCard = (props) => {
  const { home } = props;
  return (
    //src={home.attributes.cover_image.data.attributes.formats.medium.url}
    // {home.attributes.street}
    /* 
     {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
          }).format(home.attributes.price)}
          */

    <Grid xs={4}>
      <Card css={{ w: "460px", h: "430px" }} isHoverable isPressable>
        <Card.Header
          style={{
            backgroundColor: "#252526",
            opacity: 0.9,
            height: "3.5rem",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Col>
            <Text color="#d1d1d1" size={12}>
              {home.attributes.street}
            </Text>
          </Col>

          <Col>
            <Row justify="flex-end">
              <Badge
                size="xs"
                color="success"
                style={{
                  border: "none",
                  fontFamily: "Oakes",
                  padding: "8px",
                  fontWeight: "lighter",
                  paddingTop: "0.6rem",
                }}
              >
                {new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "USD",
                }).format(home.attributes.price)}
              </Badge>
            </Row>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={home.attributes.cover_image.data.attributes.formats.medium.url}
            objectFit="cover"
            width="100%"
            height="100%"
            alt=""
          />
        </Card.Body>

        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#25252699 ",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <Row justify="flex-end">
            <Button flat auto rounded css={{ color: "#ffff", bg: "#252526" }}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
                style={{ fontFamily: "Oakes" }}
              >
                Make an Offer
              </Text>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default HomeCard;
