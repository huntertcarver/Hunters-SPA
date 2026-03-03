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
  Spoiler
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
} from "@tabler/icons-react";
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
import DellMclaren from "../Images/DellMclaren.jpg";
import PayPal1 from "../Images/PayPal1.jpeg";
import PayPal2 from "../Images/PayPal2.jpeg";
import PayPal3 from "../Images/PayPal3.jpeg";
import { QuoteCard } from "../Components/QuoteCard";
import ParticlesComponent from "../Components/ParticlesComponent";
import ImagePreviewModal from "../Components/ImagePreviewModal";
import Resume from "../Files/Resume.pdf";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { useElementSize, useViewportSize } from "@mantine/hooks";
import { useState } from "react";

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
  const { width: viewportWidth } = useViewportSize();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState(DellMclaren);

  const openImagePreview = (imageSrc: string) => {
    setSelectedImageSrc(imageSrc);
    setOpened(true);
  };

  return (
    <Container my="md" size="lg">
      <ParticlesComponent />
      {viewportWidth > 765 && (
        <ImagePreviewModal
          opened={opened}
          imageSrc={selectedImageSrc}
          imageClassName={cx(classes.item)}
          onClose={() => setOpened(false)}
        />
      )}
      <SimpleGrid
        cols={3}
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
Hello world! Thank you for taking a look at my website! I’m Hunter Carver, an ambitious Software Engineer who is a 0-1 developer with a drive for innovation. I am currently primarily a backend software engineer at Dell Technologies on the Customer Data Marketplace team. My role consists of maintaining our internal APIs by implementing new logic based on business requirements, identifying and remediating vulnerabilities, and performing high-priority dev support for our internal customers. In addition to the Customer Data Marketplace team, through the effort of seeking out additional work, I am also on Dell Digitals Customer Innovation Council. On the Customer Innovation Council, we seek to innovate any aspect of the customer data at Dell, whether it’s improving the architecture, how internal customers interact with the data, or implementing AI in our processes. Contrary to the present, I have humble beginnings as I started my SWE journey as a student at my local community college. Through hard work, dedication, and thinking outside of the box, I achieved a great many things at this college and eventually graduated and transferred to my local university. At Texas A&M University Corpus-Christi I was able to land an internship (More of a co-op) as a Software Engineer at one of the seven FAA-approved UAS test sites in the nation. We had close ties to NASA and other national and private aviation organizations and as one of the five Software Engineers in this organization, I was a critical asset to driving, maintaining, and innovating our mission-critical software. Working at Lone Star UAS for ~1.5-2 years gave me a great breadth of experience in nearly all domains of Software Engineering from front-end to back-end, database and stored procedures to the overall architecture and design of our systems, CI/CD to Auth, and nearly everything in between. Now in this new era of AI, my goal is to be on the forefront of innovation and to immerse myself in work that has a significant impact.
              </Spoiler>
            </Text>
          </Paper>

          <Carousel
            withIndicators
            loop
            align="center"
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="Saving the company approximately $800,000 annually is a remarkable achievement, and it&apos;s great to see us utilize a system we already have in place. Reducing complexity is great for all of us."
                citation="Sean Neal, Director of Cryptography, PayPal"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="Vault OKR: You've made excellent strides toward Vault expertise this year. Led the strategy to migrate keys and secrets from KeyMaker to Vault. Demonstrated good understanding of Vault's security model and best practices. HashiCorp Certified: Vault Associate is a big win to become an expert of Vault."
                citation="Gaurav Singh, Sr. Staff Cybersecurity Engineer, PayPal"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="Thank you for being such an exceptional buddy and making my onboarding experience comfortable. Your proactive support and Day One resources were incredibly helpful, and I still rely on them. I am also very grateful for the dedicated session you held to walk me through KeyMaker and the Cloud Modernization plans for GCP and Vault."
                citation="Mukal Tope, Staff Cybersecurity Engineer, PayPal"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="HashiCorp Certified: Vault Associate is a big win. You demonstrated the ability to work on production-grade solutions aligned with best security practice."
                citation="Gaurav Singh, Sr. Staff Cybersecurity Engineer, PayPal"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="I've seen Hunter make a strong impact by establishing a visible presence across the organization. His self-motivation, eagerness to learn, and strong ownership demonstrate his drive toward becoming a high-impact emerging leader."
                citation="Pugal, Staff Cybersecurity Engineer, PayPal"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="I want to extend a heartfelt thank you for the incredible work you put into PayPal Impact Day. Your efforts made a meaningful difference for our people and our communities. You helped strengthen our culture and bring our customer obsession to life."
                citation="Alex Chriss, CEO, PayPal"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="I personally have been stunned at how quickly Hunter has picked up the purpose of our tools and articulates his work using the domain terminology."
                citation="Charles Bouvette,
          Director, Software Engineering,
          Dell Technologies"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="He has the initiative to read technical books, watch training videos, create sample projects, and make probing inquiries for tasks assigned to him. 
          Such qualities are rare for entry level engineers that I have met."
                citation="Angelo Diamante,
          Software Development Engineer 3,
          Core10"
                inCarousel
              />
            </Carousel.Slide>

            <Carousel.Slide className={cx(classes.centerItem)}>
              <QuoteCard
                quote="Hunter would be an asset to any employer and I recommend him for any endeavor he chooses to pursue."
                citation="Ryan Kelley, Software Engineer 2, Lone Star UAS"
                inCarousel
              />
            </Carousel.Slide>
          </Carousel>

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
              PayPal
            </Title>
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
              Software Engineer 2
            </Title>
            <Spoiler maxHeight={260} showLabel="Show more" hideLabel="Hide">
              <Timeline active={12} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  I joined PayPal&apos;s Secret Management team as a
                  Software Engineer 2, focusing on our enterprise-wide key management system and
                  internal cryptography libraries.
                </Text>
                <Text size="xs" mt={4}>
                  September 2024
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconPrompt size={12} />}
                title="L1/L2 Support & Incident Response"
              >
                <Text color="dimmed" size="sm">
                  I provided L1 rotational on-call support for critical
                  incidents on PayPal&apos;s legacy key management and class 2
                  encryption systems, while also supporting developers at L2
                  with legacy KMS integrations.
                </Text>
                <Text size="xs" mt={4}>
                  Ongoing
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Fortanix Migration Impact"
              >
                <Text color="dimmed" size="sm">
                  I drove the Fortanix HSM -&gt; GCP CMEK migration to
                  completion across 22K+ disks and 400+ teams, helping save the
                  company around $800K annually.
                </Text>
                <Text size="xs" mt={4}>
                  2025
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBooks size={12} />}
                title="Vault Design Forum"
              >
                <Text color="dimmed" size="sm">
                I drove weekly design forums within the Secret Management team and critical architects in the organization
                to solve some of the most complex issues with the KeyMaker to Vault migration
                such as enterprise-wide key sharing and key drift, and translating outcomes into actionable deliverables.
                </Text>
                <Text size="xs" mt={4}>
                  2025
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Vault Migration Scripts"
              >
                <Text color="dimmed" size="sm">
                  I designed and implemented the scripts necessary to migrate applications and their associated keys
                  from our on-premise key management system, KeyMaker, to HashiCorp Vault. These consisted of an application
                  registration script that programmatically wrote Terraform code and created a PR based on the application, and
                  a key migration script that migrated the keys from KeyMaker to Vault.
                </Text>
                <Text size="xs" mt={4}>
                  2025
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconTrophy size={12} />}
                title="Team Building"
              >
                <Text color="dimmed" size="sm">
                  I have assisted in the growth of the Secret Management team by conducting numerous
                  full-time and contract position interviews, as well as onboarding new employees and contractors.
                </Text>
                <Text size="xs" mt={4}>
                  2025
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Raptor 5 Library Upgrades"
              >
                <Text color="dimmed" size="sm">
                  I released the latest major version of our five internal Java
                  encryption and key management libraries, including fixes for
                  100+ broken legacy tests, builds, and pipeline jobs.
                </Text>
                <Text size="xs" mt={4}>
                  2025 - 2026
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconTrophy size={12} />}
                title="Cryptography 2026 OKRs | Cloud Modernization Lead"
              >
                <Text color="dimmed" size="sm">
                  I continue to drive weekly organization-wide multi-team design forums for PayPal&apos;s
                  GCP cryptography migration, partnering with senior technical
                  leaders to architect enterprise-wide solutions and translate
                  these discussions into actionable deliverables that I and other engineers implement.
                </Text>
                <Text size="xs" mt={4}>
                  2025 - 2026
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Enterprise-Wide Class 2 Data Encryption Solution"
              >
                <Text color="dimmed" size="sm">
                  I implemented the enterprise-wide class 2
                  envelope-encryption solution, the "CryptoSDK", with GCP Tink and
                  Caffeine caching, and I completed 100k-envelope load testing
                  which resulted in (~0.1ms) warm-cache latency.
                </Text>
                <Text size="xs" mt={4}>
                  2025 - 2026
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconDeviceTvOld size={12} />}
                title="Cloud Playbacks Forum"
              >
                <Text color="dimmed" size="sm">
                  I presented the enterprise-wide class 2 data encryption solution, the "CryptoSDK", to the company-wide audience of
                  50+ key managers, directors, distinguished engineers, and SVPs in the Cloud Playbacks forum.
                </Text>
                <Text size="xs" mt={4}>
                  2025 - 2026
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Pub/Sub-driven Key Provisioning Cloud Function"
              >
                <Text color="dimmed" size="sm">
                  Implemented a Pub/Sub-driven Cloud Function for automated key provisioning based on a schema-driven message structure.
                </Text>
                <Text size="xs" mt={4}>
                  2026
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Data Interoperability"
              >
                <Text color="dimmed" size="sm">
                  Implemented a solution to enable data interoperability between cloud applications consuming the CryptoSDK and on-premise applications using the on-premise key management system class 2 encryption service
                   via public key cryptography re-encryption.
                </Text>
                <Text size="xs" mt={4}>
                  2026
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconPrompt size={12} />}
                title="Team Management"
              >
                <Text color="dimmed" size="sm">
                  We have recently onboarded a number of Deloitte contractors and I am going through the process
                  of ramping them up on our various Cryptographic Cloud Modernization initiatives and allocating them where needed.
                </Text>
                <Text size="xs" mt={4}>
                  2026
                </Text>
              </Timeline.Item>
              </Timeline>
            </Spoiler>
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
                <Image
                  className={cx(classes.item)}
                  src={PayPal1}
                  onClick={() => openImagePreview(PayPal1)}
                />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image
                  className={cx(classes.item)}
                  src={PayPal2}
                  onClick={() => openImagePreview(PayPal2)}
                />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image
                  className={cx(classes.item)}
                  src={PayPal3}
                  onClick={() => openImagePreview(PayPal3)}
                />
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
              Dell Technologies
            </Title>
            <Title order={4}
              variant="gradient"
              className={cx(classes.title)}
              gradient={{
                from: theme.colorScheme === "dark" ? theme.colors.red[6] : theme.colors.blue[5],
                to: theme.colorScheme === "dark" ? theme.colors.orange[6] : theme.colors.green[5],
              }}>
                Software Engineer 1
            </Title>
            <Spoiler maxHeight={260} showLabel="Show more" hideLabel="Hide">
              <Timeline active={6} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconArrowBigRight size={12} />}
                title="Start"
              >
                <Text color="dimmed" size="sm">
                  I started on the Customer Data Marketplace team as primarily
                  a back-end Software Engineer. I was able to quickly learn our
                  tech stack and start contributing to the team.
                </Text>
                <Text size="xs" mt={4}>
                  August 2023
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Remediate Vulnerabilities"
              >
                <Text color="dimmed" size="sm">
                  I was tasked with remediating vulnerabilities in our
                  application. I was able to remediate over 100 vulnerabilities
                  bringing our reported vulnerabilities down to 0.
                </Text>
                <Text size="xs" mt={4}>
                  2023
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Code Coverage"
              >
                <Text color="dimmed" size="sm">
                  I was tasked with increasing the code coverage of our primary repository
                  from 66% to 90%. I was able to achieve this by writing 100+ unit tests.
                </Text>
                <Text size="xs" mt={4}>
                  2023
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="DevOps"
              >
                <Text color="dimmed" size="sm">
                  Implemented multiple new DevOps jobs to our CI/CD pipeline with capabilities
                 such as vulnerability detection, branch retrofit automation, and inclusive language detection
                </Text>
                <Text size="xs" mt={4}>
                  2024
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Repository Version Upgrades"
              >
                <Text color="dimmed" size="sm">
                  Enhanced the performance, security, and maintainability of my team’s repositories by upgrad	ing from .NET 6 to .NET 8
                </Text>
                <Text size="xs" mt={4}>
                  2024
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Customer Innovation Council"
              >
                <Text color="dimmed" size="sm">
                  Implemented the CI/CD pipeline for the AI application that the Customer Innovation Council is developing.
                </Text>
                <Text size="xs" mt={4}>
                  2024
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<IconCode size={12} />}
                title="Malaysia E-Invoice"
              >
                <Text color="dimmed" size="sm">
                  Added the required logic to some endpoints of our internal APIs to support the addition of Malaysia E-Invoice 
                  capabilities.
                </Text>
                <Text size="xs" mt={4}>
                  2024
                </Text>
              </Timeline.Item>
              </Timeline>
            </Spoiler>
          </Paper>
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Image className={cx(classes.item)} src={DellMclaren}
              onClick={() => openImagePreview(DellMclaren)} />
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
              Lone Star UAS
            </Title>
            <Title order={4}
              variant="gradient"
              className={cx(classes.title)}
              gradient={{
                from: theme.colorScheme === "dark" ? theme.colors.red[6] : theme.colors.blue[5],
                to: theme.colorScheme === "dark" ? theme.colors.orange[6] : theme.colors.green[5],
              }}>
                Software Engineer (Intern)
            </Title>
            <Spoiler maxHeight={260} showLabel="Show more" hideLabel="Hide">
              <Timeline active={3} bulletSize={24} lineWidth={2}><Timeline.Item
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
              </Timeline>
            </Spoiler>
          </Paper>
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Image className={cx(classes.item)} src={LSUAS} 
              onClick={() => openImagePreview(LSUAS)} />
          </Paper>
        </div>

        <div>
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
            <Spoiler maxHeight={260} showLabel="Show more" hideLabel="Hide">
              <Timeline active={3} bulletSize={24} lineWidth={2}>
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
            </Spoiler>
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
                <Image className={cx(classes.item)} src={Grad2} 
                  onClick={() => openImagePreview(Grad2)} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={Grad4}
                  onClick={() => openImagePreview(Grad4)} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={Grad1}
                  onClick={() => openImagePreview(Grad1)} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={Grad3}
                  onClick={() => openImagePreview(Grad3)} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={TAMUCC}
                  onClick={() => openImagePreview(TAMUCC)} />
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
            <Spoiler maxHeight={260} showLabel="Show more" hideLabel="Hide">
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
            </Spoiler>
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
                <Image className={cx(classes.item)} src={hof}
                  onClick={() => openImagePreview(hof)} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={hofclose}
                  onClick={() => openImagePreview(hofclose)} />
              </Carousel.Slide>

              <Carousel.Slide>
                <Image className={cx(classes.item)} src={mall}
                  onClick={() => openImagePreview(mall)} />
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
