import {
  Paper,
  Spoiler,
  Text,
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
    paddingLeft: theme.spacing.xl,

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
  timelineWrapper: {
    position: "relative",
  },
  timelineItem: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing.sm,

    "&:not(:last-of-type)": {
      paddingBottom: theme.spacing.xl,
    },

    "&:not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: 24,
      bottom: 0,
      left: 11,
      borderLeft: `2px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },
  timelineItemLineActive: {
    "&::after": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
    },
  },
  timelineBullet: {
    position: "relative",
    zIndex: 1,
    width: 24,
    minWidth: 24,
    height: 24,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
  timelineBulletActive: {
    borderColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    color: theme.white,
  },
  timelineContent: {
    flex: 1,
    minWidth: 0,
  },
  timelineItemTitle: {
    fontWeight: 500,
    lineHeight: 1.1,
    marginBottom: 4,
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

const TimelineItem = ({
  entry,
  classes,
  lineActive,
  bulletActive,
}: {
  entry: TimelineEntry;
  classes: ReturnType<typeof useStyles>["classes"];
  lineActive: boolean;
  bulletActive: boolean;
}) => {
  const Icon = timelineIconMap[entry.icon];

  return (
    <div
      className={`${classes.timelineItem} ${
        lineActive ? classes.timelineItemLineActive : ""
      }`}
    >
      <div
        className={`${classes.timelineBullet} ${
          bulletActive ? classes.timelineBulletActive : ""
        }`}
      >
        <Icon size={12} />
      </div>
      <div className={classes.timelineContent}>
        <Text className={classes.timelineItemTitle}>{entry.title}</Text>
        <Text color="dimmed" size="sm">
          {entry.description}
        </Text>
        <Text size="xs" mt={4}>
          {entry.date}
        </Text>
      </div>
    </div>
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
        <div className={classes.timelineWrapper}>
          {section.entries.map((entry, index) => (
            <TimelineItem
              key={`${entry.title}-${entry.date}`}
              entry={entry}
              classes={classes}
              lineActive={index < section.active}
              bulletActive={index <= section.active}
            />
          ))}
        </div>
      </Spoiler>
    </Paper>
  );
}
