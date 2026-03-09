import {
  Container,
  createStyles,
  Divider,
  Paper,
  Progress,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import UserInfoIcons from "../Components/UserInfo";
import pfp from "../Images/pfp.jpg";
import { QuoteCard } from "../Components/QuoteCard";
import { useParams } from "react-router-dom";
import { getSkillByName, normalizeSkillParam } from "../Data/skills";
import { profileConfig } from "../Data/siteConfig";

const useStyles = createStyles((theme) => ({
  page: {
    minHeight: "calc(100vh - 56px)",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  container: {
    [theme.fn.smallerThan("sm")]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
    },
  },
  paper: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,

    [theme.fn.largerThan("xs")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: theme.spacing.lg,
    },

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.sm,
    },
  },
  line: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },

    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    },
  },
  user: {
    flex: 1,
    minWidth: 0,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  skill: {
    flexShrink: 0,
    maxWidth: "100%",

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  title: {
    display: "block",
    marginTop: theme.spacing.xs,
    textAlign: "center",
    lineHeight: 0.98,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    fontSize: "clamp(2rem, 7vw, 3.5rem)",

    [theme.fn.smallerThan("xs")]: {
      fontSize: "clamp(1.8rem, 8vw, 2.2rem)",
      marginTop: 0,
    },
  },
  titleWord: {
    display: "inline-block",
    whiteSpace: "nowrap",

    "&:not(:last-of-type)": {
      marginRight: theme.spacing.xs,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "block",
      marginRight: 0,
    },
  },
  progressMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      alignItems: "flex-start",
    },
  },
}));

function SkillArticle() {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const params = useParams<{
    skill: string;
  }>();

  const skill = normalizeSkillParam(params.skill);
  const skillObj = getSkillByName(skill);
  const titleWords = skill.split(" ");

  var skillLevelWord = "";
  if (skillObj.skillLevel < 30) {
    skillLevelWord = "Beginner";
  } else if (skillObj.skillLevel < 70) {
    skillLevelWord = "Competent";
  } else if (skillObj.skillLevel < 90) {
    skillLevelWord = "Advanced";
  } else {
    skillLevelWord = "Expert";
  }

  return (
    <div className={classes.page}>
      <Container size="md" px="md" className={classes.container}>
        <Stack spacing="md">
          <Paper className={classes.paper}>
            <div className={classes.user}>
              <UserInfoIcons
                avatar={pfp}
                name={profileConfig.name}
                title={profileConfig.role}
                phone={profileConfig.phone}
                email={profileConfig.email}
              />
            </div>
            <Divider size={2} variant="dashed" className={classes.line} />
            <div className={classes.skill}>
              <Title
                variant="gradient"
                gradient={
                  colorScheme === "dark"
                    ? { from: "red", to: "gold", deg: 45 }
                    : { from: "blue", to: "green", deg: 45 }
                }
                className={classes.title}
                sx={{ fontFamily: "buffalo" }}
              >
                {titleWords.map((word) => (
                  <span key={word} className={classes.titleWord}>
                    {word}
                  </span>
                ))}
              </Title>
            </div>
          </Paper>

          <div className={classes.progressMeta}>
            <Text size="sm" color="dimmed">
              Skill Level:
            </Text>
            <Text size="sm" color="dimmed">
              {skillLevelWord}
            </Text>
          </div>

          <Progress
            value={skillObj.skillLevel}
            color={colorScheme === "dark" ? "blue" : "lightblue"}
          />

          <QuoteCard citation="- Hunter Carver" quote={skillObj.definition} />
        </Stack>
      </Container>
    </div>
  );
}

export default SkillArticle;
