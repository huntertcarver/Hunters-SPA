import {
  Badge,
  Button,
  createStyles,
  Paper,
  Title,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import json from "../Data/skills.json";
import ParticlesComponent from "../Components/ParticlesComponent";
import Ripple from "../Components/Ripple";

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 18,
    },
  },
  skill: {
    [theme.fn.smallerThan("md")]: {
      widows: 10,
    },
  },
  centerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.colorScheme === "dark" ? "#000000" : "#ffffff",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
  },
  link: {
    [theme.fn.largerThan("md")]: {
      width: "50%",
    },
    [theme.fn.smallerThan("md")]: {
      width: "90%",
    },
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage:
        theme.colorScheme === "dark"
          ? theme.fn.linearGradient(
              0,
              theme.colors.red[6],
              theme.colors.orange[6]
            )
          : theme.fn.linearGradient(
              0,
              theme.colors.blue[5],
              theme.colors.green[5]
            ),
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: 6,
      backgroundImage:
        theme.colorScheme === "dark"
          ? theme.fn.linearGradient(
              0,
              theme.colors.red[6],
              theme.colors.orange[6]
            )
          : theme.fn.linearGradient(
              0,
              theme.colors.blue[5],
              theme.colors.green[5]
            ),
    },
  },
}));

function Home() {
  const { colorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  interface SkillMapObj {
    skillLevel: number;
    definition: string;
  }

  let skillMapString = JSON.stringify(json);
  let skillMap = new Map<string, SkillMapObj>(
    Object.entries(JSON.parse(skillMapString))
  );

  var skills = Array.from(skillMap.keys());

  var badges: JSX.Element[] = [];
  let text = [
    `Hey I'm Hunter!`,
    `I'm a Full Stack Software Engineer.`,
    `Navigate,`,
    `Scroll down,`,
    `or click a skill to learn more!`,
  ];

  skills.forEach((skill) => {
    let randomTop = getRandomNumber(0, winHeight);
    let randomLeft = getRandomNumber(0, winWidth);
    let speed = Math.random() + 1;
    let offset;
    speed > 1.5 ? (offset = 0.75) : (offset = 0);

    badges.push(
      <ParallaxLayer
        offset={offset}
        speed={speed}
        style={{
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
          top: randomTop + "px",
          left: randomLeft + "px",
          width: 5,
          height: 5,
          zIndex: speed * 100,
        }}
      >
        <Button
          className={cx(classes.button)}
          compact
          size="xs"
          variant="outline"
        >
          <Link
            to={"/skills/" + skill}
            key={skill}
            style={{ textDecoration: "none" }}
          >
            <Badge>{skill}</Badge>
          </Link>
        </Button>
      </ParallaxLayer>
    );
  });

  return (
    <div>
      <Parallax
        pages={2}
        style={{
          top: "0",
          left: "0",
          zIndex: -1,
          backgroundColor: colorScheme === "dark" ? "black" : "white",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          className={cx(classes.centerItem)}
        >
          <Title
            className={classes.title}
            variant="gradient"
            gradient={{
              from: colorScheme === "dark" ? "lightblue" : "blue",
              to: colorScheme === "dark" ? "white" : "black",
            }}
          >
            <Typewriter
              options={{
                strings: text,
                delay: 100,
                deleteSpeed: 25,
                autoStart: true,
                loop: true,
              }}
            />
          </Title>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            backgroundColor: theme.fn.variant({
              variant: "light",
              color: theme.primaryColor,
            }).background,
          }}
        >
        <div style={{position: 'absolute', top: 0, left: 0, zIndex: 0, height: '100%', width: '100%'}}>
          <Ripple />
        </div>
        </ParallaxLayer>

        {badges}

        <ParallaxLayer
          offset={1}
          speed={0.5}
          className={cx(classes.centerItem)}
          style={{
            color: theme.fn.variant({
              variant: "light",
              color: theme.primaryColor,
            }).color,
          }}
        >
          <Link
            to={"/about"}
            key={"about"}
            className={cx(classes.centerItem, classes.link)}
            style={{ textDecoration: "none" }}
          >
            <Paper withBorder radius="md" className={classes.card}>
              <div
                className={cx(classes.centerItem)}
                style={{ justifyContent: "space-between" }}
              >
                <Title
                  className={cx(classes.title)}
                  variant="gradient"
                  gradient={{
                    from: colorScheme === "dark" ? "lightblue" : "blue",
                    to: colorScheme === "dark" ? "white" : "black",
                  }}
                >
                  Hello!
                </Title>
                <Button
                  className={cx(classes.button)}
                  compact
                  size="xs"
                  variant="outline"
                >
                  <Badge>About me</Badge>
                </Button>
              </div>
              <Text
                size="sm"
                mt="sm"
                color="dimmed"
                className={cx(classes.centerItem)}
              >
                Hey, welcome to my website! The purpose of this is to display my
                front end and back end Software Engineering skills not only from
                the information provided on this website but also from the code
                that makes it up. This website was made on React, Typescript,
                Mantine, and many TS/React libraries. I hope you enjoy your
                stay!
              </Text>
            </Paper>
          </Link>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;

function getRandomNumber(min: number, max: number) {
  var pos = Math.floor(Math.random() * (max - min + 1)) + min;
  //To make sure the skills are not too close to the edge of the screen
  if (pos > max) {
    getRandomNumber(min, max);
  } else if (pos < min) {
    getRandomNumber(min, max);
  }
  //To make sure the skills are not too close to the the typewriter text
  else if (pos < max / 2 + 50 && pos > max / 2 - 50) {
    getRandomNumber(min, max);
  } else return pos;
}
