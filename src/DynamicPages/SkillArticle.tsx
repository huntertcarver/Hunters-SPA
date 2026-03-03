import {
  createStyles,
  Paper,
  Title,
  useMantineColorScheme,
  Divider,
  Progress,
  Group,
  Text,
} from "@mantine/core";
import UserInfoIcons from "../Components/UserInfo";
import pfp from "../Images/pfp.jpg";
import { QuoteCard } from "../Components/QuoteCard";
import { useParams } from "react-router-dom";
import { getSkillByName, normalizeSkillParam } from "../Data/skills";
import { profileConfig } from "../Data/siteConfig";

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 18,
    },
  },
  paper: {
    [theme.fn.largerThan("xs")]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  line: {
    [theme.fn.largerThan("xs")]: {
      display: 'none',
    },
  },
  user: {
    [theme.fn.smallerThan("sm")]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  skill: {
    [theme.fn.smallerThan("sm")]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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

  var skillLevelWord = "";
  if (skillObj.skillLevel < 30) {
    skillLevelWord = "Beginner";
  } else if (skillObj.skillLevel < 70) {
    skillLevelWord = "Competent";
  } else if (skillObj.skillLevel < 90) {
    skillLevelWord = "Advanced";
  } else { skillLevelWord = "Expert"; }

  return (
    <div style={{minHeight: "100vh"}}>
      <Paper p="xl" className={classes.paper}>
        <div className={classes.user}>
          <UserInfoIcons
            avatar={pfp}
            name={profileConfig.name}
            title={profileConfig.role}
            phone={profileConfig.phone}
            email={profileConfig.email}
          />
        </div>
        <br />
        <Divider size={2} variant="dashed" className={classes.line} />
        <br />
        <div className={classes.skill}>
          <Title
          variant="gradient"
          gradient={colorScheme === "dark" ? { from: "red", to: "gold", deg: 45 } : { from: "blue", to: "green", deg: 45 }}
          sx={{ fontFamily: "buffalo", display: "inline", mt: "md" }}
          >
            {skill}
          </Title>
        </div>
      </Paper>
      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Skill Level:
        </Text>
        <Text size="sm" color="dimmed">
          {skillLevelWord}
        </Text>
      </Group>
      <Progress value={skillObj.skillLevel} mt={5} color={colorScheme === "dark" ? "blue" : "lightblue"} />
      <br />
      <QuoteCard citation="- Hunter Carver" quote={skillObj.definition} />
      <br />
    </div>
  );
}

export default SkillArticle;