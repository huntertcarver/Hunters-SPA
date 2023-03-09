import { createStyles, Paper, Title, useMantineColorScheme, Divider, Progress, Group, Text } from "@mantine/core";
import UserInfoIcons from "../Components/UserInfo";
import pfp from "../Images/pfp.jpg";
import { QuoteCard } from "../Components/QuoteCard";
import { useParams } from "react-router-dom";
import { stringify } from "querystring";
import json from "../Data/skills.json";

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
  const { classes, cx } = useStyles();
  const params = useParams<ParamsObj>();

  type ParamsObj = {
    skill: string;
  }

  interface SkillMapObj{
    skillLevel: number;
    definition: string;
  }

  let skillMapString = JSON.stringify(json);
  let skillMap = new Map<string,SkillMapObj>(Object.entries(JSON.parse(skillMapString)));
  let skill = params.skill as string;
  //Problem with getting C# to work
  skill == 'C' ? skill = 'C#': skill = skill;
  let skillObj = skillMap.get(skill);

  skillObj == undefined ? skillObj = {skillLevel: 0, definition: "This skill is not in the database."} : skillObj = skillObj;

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
          <UserInfoIcons avatar={pfp} name="Hunter Carver" title="Software Engineer" phone="361-946-7678" email="hunter@1968bird.com" /> 
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