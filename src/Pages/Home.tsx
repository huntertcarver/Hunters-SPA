import {
  Badge,
  Button,
  createStyles,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import json from "../Data/skills.json";
import ParticlesComponent from "../Components/ParticlesComponent";

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
}));

function Home() {
  const { colorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  interface SkillMapObj{
    skillLevel: number;
    definition: string;
  }

  let skillMapString = JSON.stringify(json);
  let skillMap = new Map<string,SkillMapObj>(Object.entries(JSON.parse(skillMapString)));

  var skills = Array.from(skillMap.keys());

  var badges: JSX.Element[] = [];
  let text = [`Hey I'm Hunter!`, `I'm a Full Stack Software Engineer.`, `Navigate,`, `Scroll down,`, `or click a skill to learn more!`];

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
          // To make buttons octogons in the future
          sx={(theme) => ({
            '&:before': {
            },
            '&:after': {
            },
          })}
          compact
          size="xs"
          variant="outline"
        >
        <Link
          to={'/skills/'+skill}
          key={skill}
          style={{textDecoration: 'none'}}>
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
        />

        {badges}

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.fn.variant({
              variant: "light",
              color: theme.primaryColor,
            }).color,
          }}
        >
          <ParticlesComponent />
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;

function getRandomNumber(min: number, max: number) {
  var pos = Math.floor(Math.random() * (max - min + 1)) + min;
  //To make sure the skills are not too close to the edge of the screen
  if (pos > max) {getRandomNumber(min, max);}
  else if (pos < min) {getRandomNumber(min, max);}
  //To make sure the skills are not too close to the the typewriter text
  else if (pos < max / 2 + 50 && pos > max / 2 - 50) {getRandomNumber(min, max);}
  else return pos;
}
