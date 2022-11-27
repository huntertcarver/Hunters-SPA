import {
  Paper,
  Timeline,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  createStyles,
  Container,
  SimpleGrid,
  Grid,
  Skeleton,
  Title,
  Divider,
  Image,
  Button,
  Badge,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
  IconArrowBigRight,
  IconPrompt,
  IconMusic,
  IconBooks,
  IconTrophy,
  IconCode,
  IconDeviceTvOld,
  IconListCheck,
} from "@tabler/icons";
import UserInfoIcons from "../Components/UserInfo";
import pfp from "../Images/pfp.jpg";
import hof from "../Images/hof.jpg";
import hofclose from "../Images/hofclose.jpg";
import mall from "../Images/mall.jpg";
import { QuoteCard } from "../Components/QuoteCard";
import Ripple from "../Components/Ripple";
import ParticlesComponent from "../Components/ParticlesComponent";
import Resume from "../Files/Resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useElementSize } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => ({
  title: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 18,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  centerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    marginBottom: theme.spacing.xl,
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
  item: {
    border: "none",
    overflow: "hidden",
    frameBorder: "0",
    width: "100%",
    height: "100%",
  },
  resume: {

    border: `solid 1px ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[5]
    }`,
  },

  carousel: {
    "&:hover": {
      [`& .${getRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: "width 250ms ease",

    "&[data-active]": {
      width: 16,
    },
  },
  button: {
    backgroundColor: theme.colorScheme === "dark" ? "#000000" : "#ffffff",
    margin: theme.spacing.xl,


    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
  },
}));

const PRIMARY_COL_HEIGHT = 300;

function About() {
  const { colorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();  
  const { ref, width } = useElementSize();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md" size="lg">
      <ParticlesComponent />
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <div className={cx(classes.title)}>
              <UserInfoIcons
                avatar={pfp}
                name="Hunter Carver"
                title="Software Engineer"
                phone="361-946-7678"
                email="hunter@1968bird.com"
              />
            </div>
            <Divider my="sm" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Paper>

          <QuoteCard quote="Testing my quote card" citation="quoteman" />
          <QuoteCard quote="Testing my quote card" citation="quoteman" />
          <QuoteCard quote="Testing my quote card" citation="quoteman" />

          <Paper
            ref={ref}
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <div style={{ height: 1.25 * width }} className={cx(classes.resume)}>
              <Document file={Resume} className={cx(classes.item)}>
                <Page pageNumber={1} renderMode="svg" width={width} />
              </Document>
            </div>
            <a href={Resume} download="Resume" target="_blank" style={{textDecoration: 'none'}}>
              <Button
                size="xl"
                variant="outline"
                className={cx(classes.button)}
                leftIcon={<IconListCheck size={14} />}
              >
                <Badge>Download my resume!</Badge>
              </Button>
            </a>
          </Paper>
        </div>

        <div>
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
              Lone Star UAS
            </Title>
            <Timeline active={6} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  Fresh out of high school, I took my first college course that
                  summer.
                </Text>
                <Text size="xs" mt={4}>
                  Summer 2018
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconPrompt size={12} />}
                title="Computer Science Club"
              >
                <Text color="dimmed" size="sm">
                  In the latter half of my time at Del Mar College, I founded
                  Del Mar's Computer Science Club with a few colleagues from
                  class. I presided over the club until graduation.
                </Text>
                <Text size="xs" mt={4}>
                  Spring, 2020
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Student Government"
                bullet={<IconBooks size={12} />}
              >
                <Text color="dimmed" size="sm">
                  The Del Mar College Student Government Association was a
                  another student organization that I was a part of. I was the
                  communications officer then secretary of the organization
                  until graduation.
                </Text>
                <Text size="xs" mt={4}>
                  Spring, 2020
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Phi Mu Alpha"
                bullet={<IconMusic size={12} />}
              >
                <Text color="dimmed" size="sm">
                  Phi Mu Alpha is a music fraternity that I joined in my second
                  year at Del Mar College. I became the Vice President then
                  President of the chapter. I presided over the chapter until
                  graduation.
                </Text>
                <Text size="xs" mt={4}>
                  Fall, 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconTrophy size={12} />}
                title="Hall of Fame"
              >
                <Text color="dimmed" size="sm">
                  I was inducted into the Del Mar College Hall of Fame in spring
                  of 2021 for my leadership and contributions to the college.
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item bullet={<IconCode size={12} />} title="Graduation">
                <Text color="dimmed" size="sm">
                  In the summer 2021 semester I graduated with my Associate of
                  Science degree in Computer Programming.
                </Text>
                <Text size="xs" mt={4}>
                  Summer 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconDeviceTvOld size={12} />}
                title="Ad campaign"
              >
                <Text color="dimmed" size="sm">
                  After graduation I was approached by Del Mar College staff to
                  star in a new ad campaign for the college. This ad campaign
                  had a $1 million budget and was featured on TV, radio, social
                  media, billboards, and the mall.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2021
                </Text>
              </Timeline.Item>
            </Timeline>
          </Paper>
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Carousel
              withIndicators
              loop
              classNames={{
                root: classes.carousel,
                controls: classes.carouselControls,
                indicator: classes.carouselIndicator,
              }}
            >
              <Carousel.Slide>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdelmarcollegefoundation%2Fvideos%2F365027391973315%2F&show_text=false&width=560&t=0"
                  className={cx(classes.item)}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Del Mar College Ad"
                  allowFullScreen={true}
                ></iframe>
              </Carousel.Slide>
              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hof} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hofclose} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={mall} />
              </Carousel.Slide>
            </Carousel>
          </Paper>

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
              Texas A&M University - Corpus Christi
            </Title>
            <Timeline active={1} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  I transferred from Del Mar College to Texas A&M University -
                  Corpus Christi in the spring of 2021 to get an early start on
                  my upper level computer science courses.
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBooks size={12} />}
                title="Upper level courses"
              >
                <Text color="dimmed" size="sm">
                  The upper level computer science courses I've taken at A&M
                  Corpus Christi include: Software Engineering, Numerical
                  Methods, Image Processing, Theory of Programming Languages,
                  Intro to Database Systems, Operating Systems, Computer
                  Networks, Software Project Management, Survey of Programming
                  Languages, Cyber Security, Cryptography, and Skills for
                  Computing Professionals.
                </Text>
                <Text size="xs" mt={4}>
                  2022-2023
                </Text>
              </Timeline.Item>

              <Timeline.Item title="Graduation" bullet={<IconCode size={12} />}>
                <Text color="dimmed" size="sm">
                  I am on course to graduate from Texas A&M University - Corpus
                  Christi in the spring of 2023 with a Bachelor of Science in
                  Computer Science with a concentration in Systems Programming.
                </Text>
                <Text size="xs" mt={4}>
                  Spring, 2023
                </Text>
              </Timeline.Item>
            </Timeline>
          </Paper>
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Carousel
              withIndicators
              loop
              classNames={{
                root: classes.carousel,
                controls: classes.carouselControls,
                indicator: classes.carouselIndicator,
              }}
            >
              <Carousel.Slide>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdelmarcollegefoundation%2Fvideos%2F365027391973315%2F&show_text=false&width=560&t=0"
                  className={cx(classes.item)}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </Carousel.Slide>
              <Carousel.Slide>
               <Image className={cx(classes.item)} src={hof} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hofclose} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={mall} />
              </Carousel.Slide>
            </Carousel>
          </Paper>

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
              Del Mar College
            </Title>
            <Timeline active={6} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  Fresh out of high school, I took my first college course that
                  summer.
                </Text>
                <Text size="xs" mt={4}>
                  Summer 2018
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconPrompt size={12} />}
                title="Computer Science Club"
              >
                <Text color="dimmed" size="sm">
                  In the latter half of my time at Del Mar College, I founded
                  Del Mar's Computer Science Club with a few colleagues from
                  class. I presided over the club until graduation.
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2020
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Student Government"
                bullet={<IconBooks size={12} />}
              >
                <Text color="dimmed" size="sm">
                  The Del Mar College Student Government Association was a
                  another student organization that I was a part of. I was the
                  communications officer then secretary of the organization
                  until graduation.
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2020
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Phi Mu Alpha"
                bullet={<IconMusic size={12} />}
              >
                <Text color="dimmed" size="sm">
                  Phi Mu Alpha is a music fraternity that I joined in my second
                  year at Del Mar College. I became the Vice President then
                  President of the chapter. I presided over the chapter until
                  graduation.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconTrophy size={12} />}
                title="Hall of Fame"
              >
                <Text color="dimmed" size="sm">
                  I was inducted into the Del Mar College Hall of Fame in spring
                  of 2021 for my leadership and contributions to the college.
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item bullet={<IconCode size={12} />} title="Graduation">
                <Text color="dimmed" size="sm">
                  In the summer 2021 semester I graduated with my Associate of
                  Science degree in Computer Programming.
                </Text>
                <Text size="xs" mt={4}>
                  Summer 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconDeviceTvOld size={12} />}
                title="Ad campaign"
              >
                <Text color="dimmed" size="sm">
                  After graduation I was approached by Del Mar College staff to
                  star in a new ad campaign for the college. This ad campaign
                  had a $1 million budget and was featured on TV, radio, social
                  media, billboards, and the mall.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2021
                </Text>
              </Timeline.Item>
            </Timeline>
          </Paper>
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Carousel
              withIndicators
              loop
              classNames={{
                root: classes.carousel,
                controls: classes.carouselControls,
                indicator: classes.carouselIndicator,
              }}
            >
              <Carousel.Slide>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdelmarcollegefoundation%2Fvideos%2F365027391973315%2F&show_text=false&width=560&t=0"
                  className={cx(classes.item)}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </Carousel.Slide>
              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hof} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hofclose} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={mall} />
              </Carousel.Slide>
            </Carousel>
          </Paper>
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default About;
