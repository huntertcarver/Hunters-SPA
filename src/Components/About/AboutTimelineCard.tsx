import {
  Paper,
  Spoiler,
  Text,
  Timeline,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import {
  IconArrowBigRight,
  IconBooks,
  IconCertificate,
  IconCode,
  IconDeviceTvOld,
  IconMusic,
  IconPrompt,
  IconTrophy,
} from "@tabler/icons-react";
import { TimelineEntry, TimelineIconKey, TimelineSection } from "../../Data/aboutContent";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    marginBottom: theme.spacing.xl,
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  title: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 18,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
}));

const timelineIconMap: Record<TimelineIconKey, typeof IconCode> = {
  start: IconArrowBigRight,
  prompt: IconPrompt,
  books: IconBooks,
  trophy: IconTrophy,
  code: IconCode,
  video: IconDeviceTvOld,
  certificate: IconCertificate,
  music: IconMusic,
};

const TimelineItem = ({ entry }: { entry: TimelineEntry }) => {
  const Icon = timelineIconMap[entry.icon];

  return (
    <Timeline.Item bullet={<Icon size={12} />} title={entry.title}>
      <Text color="dimmed" size="sm">
        {entry.description}
      </Text>
      <Text size="xs" mt={4}>
        {entry.date}
      </Text>
    </Timeline.Item>
  );
};

interface AboutTimelineCardProps {
  section: TimelineSection;
  spoilerMaxHeight?: number;
}

export default function AboutTimelineCard({
  section,
  spoilerMaxHeight = 260,
}: AboutTimelineCardProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      className={cx(classes.card)}
      style={{ boxShadow: theme.shadows.xl }}
    >
      <Title
        className={cx(classes.title)}
        variant="gradient"
        gradient={{
          from: theme.colorScheme === "dark" ? "lightblue" : "blue",
          to: theme.colorScheme === "dark" ? "white" : "black",
        }}
      >
        {section.company}
      </Title>
      {section.role ? (
        <Title
          order={4}
          variant="gradient"
          className={cx(classes.title)}
          gradient={{
            from:
              theme.colorScheme === "dark"
                ? theme.colors.red[6]
                : theme.colors.blue[5],
            to:
              theme.colorScheme === "dark"
                ? theme.colors.orange[6]
                : theme.colors.green[5],
          }}
        >
          {section.role}
        </Title>
      ) : null}
      <Spoiler maxHeight={spoilerMaxHeight} showLabel="Show more" hideLabel="Hide">
        <Timeline active={section.active} bulletSize={24} lineWidth={2}>
          {section.entries.map((entry) => (
            <TimelineItem key={`${entry.title}-${entry.date}`} entry={entry} />
          ))}
        </Timeline>
      </Spoiler>
    </Paper>
  );
}
