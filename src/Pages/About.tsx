import {
  Paper,
  Timeline,
  Text,
  useMantineTheme,
  createStyles,
  Container,
  SimpleGrid,
  Title,
  Divider,
  Image,
  Button,
  Badge,
  Spoiler,
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
  IconCertificate,
} from "@tabler/icons";
import UserInfoIcons from "../Components/UserInfo";
import pfp from "../Images/pfp.jpg";
import hof from "../Images/hof.jpg";
import hofclose from "../Images/hofclose.jpg";
import mall from "../Images/mall.jpg";
import LSUAS from "../Images/LSUAS.jpg";
import TAMUCC from "../Images/TAMUCC.jpg";
import Grad1 from "../Images/Grad1.jpg";
import Grad2 from "../Images/Grad2.jpg";
import Grad3 from "../Images/Grad3.jpg";
import Grad4 from "../Images/Grad4.jpg";
import { QuoteCard } from "../Components/QuoteCard";
import ParticlesComponent from "../Components/ParticlesComponent";
import Resume from "../Files/Resume.pdf";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { useElementSize } from "@mantine/hooks";

//Required for react-pdf to work in production
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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

function About() {
  const { classes, cx } = useStyles();
  const { ref, width } = useElementSize();
  const theme = useMantineTheme();

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
              <Spoiler maxHeight={250} showLabel="Show more" hideLabel="Hide">
                Hey! Thank you for taking the time to look at my website! I am a
                highly ambitious Software Engineer who just graduated with my
                Bachelors of Science in Computer Science with the concentration
                of Systems Programming from the Texas A&M University Corpus
                Christi College of Engineering. I have humble beginnings as I
                started at my local community college, Del Mar College, where I
                received my Associate in Science for Computer Programming.
                During my tenure at Del Mar, I was a part of their student
                government, presided over the local chapter of Phi Mu Alpha, and
                founded a new computer science club called the Del Mar Computer
                Science club. In Spring of 2021 I was inducted into the Del Mar
                College Hall of Fame. After graduation I was contacted by Del
                Mar Staff to participate in their newest ad campaign, I had no
                idea how big of a role I was going to play. This led to my face
                and voice being associated with Del Mar all over the city of
                Corpus Christi whether it be on TV, the radio, billboards, and
                even at our local mall. Fall of 2021 I started attending Texas
                A&M University Corpus Christi as a full-time student. That
                semester I also started my internship at Lone Star UAS, as a
                Software Engineer. This internship has massively bootstrapped my
                career as I have learned an ample amount of industry experience
                with current software engineering tools such as React, NextJS,
                .Net, ASP.Net Core MVC, APIs, .Net MAUI, and much more. Not only
                has this internship allowed me to develop better technical
                skills but also soft skills as I am constantly pair-programming,
                cooperating with other software engineers, participating in team
                meetings, and recently, leading our latest project,
                “ForceFollower”, a cross-platform mobile application that tracks
                a user’s location as a foreground process and sends it to any
                API via configuration in settings. Currently, I am set to start
                as a Software Engineer for Dell Technologies and my Masters in
                Computer Science from Georgia Tech both in August of 2023.
              </Spoiler>
            </Text>
          </Paper>

          <QuoteCard
            quote="He has the initiative to read technical books, watch training videos, create sample projects, and make probing inquiries for tasks assigned to him. 
          Such qualities are rare for entry level engineers that I have met."
            citation="Angelo Diamante,
          Software Development Engineer 3,
          Core10"
          />
          <QuoteCard
            quote="Hunter would be an asset to any employer and I recommend him for any endeavor he chooses to pursue."
            citation="Ryan Kelley, Software Engineer 2, Lone Star UAS"
          />

          <Paper
            ref={ref}
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <div
              style={{ height: 1.25 * width }}
              className={cx(classes.resume)}
            >
              <Document file={Resume} className={cx(classes.item)} options={{}}>
                <Page pageNumber={1} renderMode="svg" width={width} />
              </Document>
            </div>
            <a
              href={Resume}
              download="Resume"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
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
              Dell Technologies
            </Title>
            <Timeline active={-1} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  I am set to start as a Software Engineer for Dell Technologies
                  in August of 2023.
                </Text>
                <Text size="xs" mt={4}>
                  August 2023
                </Text>
              </Timeline.Item>
            </Timeline>
          </Paper>

          {/* <Paper
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
              Georgia Tech
            </Title>
            <Timeline active={-1} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  I am set to start graduate school at Georgia Tech in August of
                  2023. I will be pursuing my Masters in Computer Science with a
                  specialization in Machine Learning. The first two courses I
                  plan on taking are Machine Learning and Machine Learning for
                  Trading.
                </Text>
                <Text size="xs" mt={4}>
                  August 2023
                </Text>
              </Timeline.Item>
            </Timeline>
          </Paper> */}

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
            <Timeline active={7} bulletSize={24} lineWidth={2}>
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
                bullet={<IconArrowBigRight size={12} />}
                title="Lone Star UAS"
              >
                <Text color="dimmed" size="sm">
                  Just freshly transferred to Texas A&M University - Corpus
                  Christi, I landed a job as a Software Engineering Intern at
                  Lone Star UAS.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="MOM Logger Sharp & MOM Log Replayer Sharp"
              >
                <Text color="dimmed" size="sm">
                  The logger was C# project that I created for Lone Star UAS. In
                  this program, it subscribed to all topics published to the
                  Message Oriented Middleware MQTT broker. It then stored the
                  messages in files on the local machine. The log replayer was a
                  C# program that parsed the files created by the logger and
                  published them to the Message Oriented Middleware MQTT broker.
                  Both programs utilizes multi-threading.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Lone Star Web & API"
              >
                <Text color="dimmed" size="sm">
                  Throughout my time at Lone Star I have made many additions to
                  the organizations internal web application, API, and database.
                  I have added new features, fixed bugs, and improved the
                  overall performance of the application. These include database
                  calls, internal API calls, upgrades to the internal RESTful
                  API, stored procedures, data visualization, authentication and
                  authorization, and UI changes.
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2021
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Force Follower"
              >
                <Text color="dimmed" size="sm">
                  Force Follower is a .NET MAUI project that I created and led
                  for Lone Star UAS. The upper management of the organization
                  wanted a way to track the location of their employees on a
                  mission in real time and I was tasked with creating a
                  solution. Even though I have never used .NET MAUI before I
                  chose MAUI so that the project could be easily cross platform
                  and I was able to create a working prototype in a matter of
                  days. After the MVP was created and approved, I refactored the
                  project to be more maintainable, added new features, and fixed
                  bugs and created a production ready application.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2022
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="UAS Status Page"
              >
                <Text color="dimmed" size="sm">
                  This was a project idea of mine that I thought LSUASC might
                  get some use out of while running a mission. I proposed the
                  project, and it was approved. This page could be displayed on
                  a screen in the Mission Control Center to visualize all Lone
                  Star UAS aircrafts critical data and post alerts if a specific
                  filter is hit. There is a Global filter set to target all
                  aircraft’s critical data and individual filter sets to target
                  specific aircraft’s data. Threshold settings are able to be
                  saved to a cookie for persistence.
                </Text>
                <Text size="xs" mt={4}>
                  Fall 2022
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBooks size={12} />}
                title="Upper level courses"
              >
                <Text color="dimmed" size="sm">
                  The upper-level computer science courses I've taken at Texas
                  A&M Corpus Christi include: Object-Oriented-Programming: A,
                  Internet Programming: A, Systems Programming: A, Capstone: A,
                  Introduction into Artificial Intelligence: B, Algorithms: A,
                  Software Engineering: B, Numerical Methods: B, Image
                  Processing: B, Theory of Programming Languages: B, Intro to
                  Database Systems: B, Operating Systems: B, Computer Networks:
                  B, Software Project Management: A, Survey of Programming
                  Languages: B, Cyber Security: C, Cryptography: B, Technical
                  and professional writing for Computer Science: B, Applied
                  Probability and Statistics: A, and Skills for Computing
                  Professionals 1: B and 2: B.
                </Text>
                <Text size="xs" mt={4}>
                  2021-2023
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Graduation"
                bullet={<IconCertificate size={12} />}
              >
                <Text color="dimmed" size="sm">
                  I graduated from the Texas A&M University - Corpus Christi
                  college of Engineering in the spring of 2023 with a Bachelor
                  of Science in Computer Science with a concentration in Systems
                  Programming. &#40;ABET Accredited&#41;
                </Text>
                <Text size="xs" mt={4}>
                  Spring 2023
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
                <Image className={cx(classes.item)} src={Grad2} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={Grad4} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={Grad1} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={Grad3} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={LSUAS} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={TAMUCC} />
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

              <Timeline.Item
                bullet={<IconCertificate size={12} />}
                title="Graduation"
              >
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
                <Image className={cx(classes.item)} src={hof} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hofclose} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={mall} />
              </Carousel.Slide>
              <Carousel.Slide>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdelmarcollegefoundation%2Fvideos%2F365027391973315%2F&show_text=false&width=560&t=0"
                  title="Del Mar College Ad"
                  className={cx(classes.item)}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </Carousel.Slide>
            </Carousel>
          </Paper>
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default About;
