import { useLayoutEffect, useRef } from "react";
import {
  Badge,
  Button,
  createStyles,
  Paper,
  Title,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Ripple from "../Components/Ripple";
import { skillNames } from "../Data/skills";
import {
  getAccentGradientColors,
  getHeroTitleGradient,
  getSurfaceButtonColor,
} from "../styles/uiTokens";

const HOME_VIEWPORT_OFFSET = 56;

const useStyles = createStyles((theme) => {
  const [accentFrom, accentTo] = getAccentGradientColors(theme);

  return {
    title: {
      [theme.fn.smallerThan("md")]: {
        fontSize: 18,
      },
    },
    centerItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: getSurfaceButtonColor(theme),

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
        backgroundImage: theme.fn.linearGradient(0, accentFrom, accentTo),
      },

      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: 6,
        backgroundImage: theme.fn.linearGradient(0, accentFrom, accentTo),
      },
    },
  };
});

function Home() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const parallaxRef = useRef<IParallax | null>(null);

  useLayoutEffect(() => {
    const resetHomeScrollState = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      parallaxRef.current?.scrollTo(0);
      const container = parallaxRef.current?.container?.current as
        | HTMLDivElement
        | undefined;
      if (container) {
        container.scrollTop = 0;
      }
    };

    resetHomeScrollState();
    const frame = window.requestAnimationFrame(resetHomeScrollState);
    const timeout = window.setTimeout(resetHomeScrollState, 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const parallaxHeight = Math.max(windowHeight - HOME_VIEWPORT_OFFSET, 1);

  const text = [
    `Hey I'm Hunter!`,
    `I'm a Full Stack Software Engineer.`,
    `Navigate,`,
    `Scroll down,`,
    `or click a skill to learn more!`,
  ];

  const badges = skillNames.map((skill) => {
    const randomTop = getRandomNumber(0, parallaxHeight);
    const randomLeft = getRandomNumber(0, windowWidth);
    const speed = Math.random() + 1;
    const offset = speed > 1.5 ? 0.75 : 0;

    return (
      <ParallaxLayer
        key={skill}
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
          <Link to={`/skills/${skill}`} style={{ textDecoration: "none" }}>
            <Badge>{skill}</Badge>
          </Link>
        </Button>
      </ParallaxLayer>
    );
  });

  return (
    <div style={{ minHeight: parallaxHeight }}>
      <div style={{ position: "relative", height: parallaxHeight, overflow: "hidden" }}>
        <Parallax
          ref={parallaxRef}
          pages={2}
          style={{
            top: "0",
            left: "0",
            zIndex: 1,
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
              gradient={getHeroTitleGradient(theme)}
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

          {badges}

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
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                height: "100%",
                width: "100%",
              }}
            >
              <Ripple />
            </div>
          </ParallaxLayer>

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
              to="/about"
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
                    gradient={getHeroTitleGradient(theme)}
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
    </div>
  );
}

export default Home;

function getRandomNumber(min: number, max: number): number {
  const pos = Math.floor(Math.random() * (max - min + 1)) + min;

  // Keep skills from rendering too close to screen edges.
  if (pos > max - 100) {
    return getRandomNumber(min, max);
  }

  if (pos < min) {
    return getRandomNumber(min, max);
  }

  // Keep skills from overlapping the typewriter text region.
  if (pos < max / 2 + 50 && pos > max / 2 - 50) {
    return getRandomNumber(min, max);
  }

  return pos;
}
