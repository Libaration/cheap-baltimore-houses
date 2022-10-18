import { Timeline, Text } from "@mantine/core";
const TimelineSection = () => {
  return (
    <>
      <Text
        size="lg"
        weight="bold"
        p={"1rem"}
        pb="1.5rem"
        style={{ fontFamily: "Oakes" }}
      >
        The process of buying a home can be a daunting task. We are here to help
      </Text>
      <Timeline active={0} bulletSize={24} lineWidth={2} color="dark">
        <Timeline.Item bullet={"1"} title="Find a home you like">
          <Text color="dimmed" size="sm" style={{ fontFamily: "Oakes" }}>
            We have many homes to choose from. We know you will find one!
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={"2"} title="Inquire about the home">
          <Text color="dimmed" size="sm" style={{ fontFamily: "Oakes" }}>
            We will get back to you as soon as possible. We will also send you a
            link to our application. You will need to fill it out and send it
            back to us.
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Make an offer" bullet={"3"} lineVariant="dashed">
          <Text color="dimmed" size="sm" style={{ fontFamily: "Oakes" }}>
            We will make an offer on the home you like. We will pay all of the
            closing costs!
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Move in" bullet={"4"}>
          <Text color="dimmed" size="sm" style={{ fontFamily: "Oakes" }}>
            That is it! You are done! You can move in! We will take care of the
            rest!
          </Text>
        </Timeline.Item>
      </Timeline>
    </>
  );
};
export default TimelineSection;
