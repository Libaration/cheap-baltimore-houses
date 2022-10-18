import { Timeline, Text } from "@mantine/core";
const TimelineSection = () => {
  return (
    <Timeline active={0} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={"1"}
        title="Find a home you like"
        style={{ color: "white" }}
      >
        <Text color="dimmed" size="sm">
          We have many homes to choose from. We know you will find one!
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={"2"}
        title="Inquire about the home"
        style={{ color: "white" }}
      >
        <Text color="dimmed" size="sm">
          We will get back to you as soon as possible. We will also send you a
          link to our application. You will need to fill it out and send it back
          to us.
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Make an offer"
        bullet={"3"}
        lineVariant="dashed"
        style={{ color: "white" }}
      >
        <Text color="dimmed" size="sm">
          We will make an offer on the home you like. We will pay all of the
          closing costs!
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Move in" bullet={"4"} style={{ color: "white" }}>
        <Text color="dimmed" size="sm">
          <Text component="span" inherit>
            That is it! You are done! You can move in! We will take care of the
            rest!
          </Text>
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};
export default TimelineSection;
