import {
  Paper,
  Text,
  useMantineTheme,
  createStyles,
  Container,
  SimpleGrid,
  Divider,
  Image,
  Button,
  Badge,
  Spoiler,
} from "@mantine/core";
import { IconListCheck } from "@tabler/icons-react";
import AboutMediaCarousel, {
  AboutCarouselMedia,
} from "../Components/About/AboutMediaCarousel";
import AboutQuotesCarousel from "../Components/About/AboutQuotesCarousel";
import AboutTimelineCard from "../Components/About/AboutTimelineCard";
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
import ImagePreviewModal from "../Components/ImagePreviewModal";
import Resume from "../Files/Resume.pdf";
import {
  aboutQuotes,
  timelineSections,
  TimelineSection,
} from "../Data/aboutContent";
import { profileConfig } from "../Data/siteConfig";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { useElementSize, useViewportSize } from "@mantine/hooks";
import { useState } from "react";

//Required for react-pdf to work in production
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 18,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
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

  button: {
    backgroundColor: theme.colorScheme === "dark" ? "#000000" : "#ffffff",
    margin: theme.spacing.xl,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
  },
}));

const getTimelineSection = (company: string): TimelineSection => {
  const section = timelineSections.find(
    (timelineSection) => timelineSection.company === company
  );

  if (!section) {
    throw new Error(`Timeline section not found for company: ${company}`);
  }

  return section;
};

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

  const paypalMedia: AboutCarouselMedia[] = [{ src: PayPal1 }, { src: PayPal2 }, { src: PayPal3 }];
  const educationMedia: AboutCarouselMedia[] = [
    { src: Grad2 },
    { src: Grad4 },
    { src: Grad1 },
    { src: Grad3 },
    { src: TAMUCC },
  ];
  const delMarMedia: AboutCarouselMedia[] = [
    { src: hof },
    { src: hofclose },
    { src: mall },
    {
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdelmarcollegefoundation%2Fvideos%2F365027391973315%2F&show_text=false&width=560&t=0",
      type: "iframe",
      title: "Del Mar College Ad",
    },
  ];

  return (
    <Container my="md" size="lg">
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
                name={profileConfig.name}
                title={profileConfig.role}
                phone={profileConfig.phone}
                email={profileConfig.email}
              />
            </div>
            <Divider my="sm" />
            <Text>
              <Spoiler maxHeight={250} showLabel="Show more" hideLabel="Hide">
Hello world! Thank you for taking a look at my website! I’m Hunter Carver, an ambitious Software Engineer who is a 0-1 developer with a drive for innovation. I am currently primarily a backend software engineer at Dell Technologies on the Customer Data Marketplace team. My role consists of maintaining our internal APIs by implementing new logic based on business requirements, identifying and remediating vulnerabilities, and performing high-priority dev support for our internal customers. In addition to the Customer Data Marketplace team, through the effort of seeking out additional work, I am also on Dell Digitals Customer Innovation Council. On the Customer Innovation Council, we seek to innovate any aspect of the customer data at Dell, whether it’s improving the architecture, how internal customers interact with the data, or implementing AI in our processes. Contrary to the present, I have humble beginnings as I started my SWE journey as a student at my local community college. Through hard work, dedication, and thinking outside of the box, I achieved a great many things at this college and eventually graduated and transferred to my local university. At Texas A&M University Corpus-Christi I was able to land an internship (More of a co-op) as a Software Engineer at one of the seven FAA-approved UAS test sites in the nation. We had close ties to NASA and other national and private aviation organizations and as one of the five Software Engineers in this organization, I was a critical asset to driving, maintaining, and innovating our mission-critical software. Working at Lone Star UAS for ~1.5-2 years gave me a great breadth of experience in nearly all domains of Software Engineering from front-end to back-end, database and stored procedures to the overall architecture and design of our systems, CI/CD to Auth, and nearly everything in between. Now in this new era of AI, my goal is to be on the forefront of innovation and to immerse myself in work that has a significant impact.
              </Spoiler>
            </Text>
          </Paper>

          <AboutQuotesCarousel quotes={aboutQuotes} />

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
          <AboutTimelineCard section={getTimelineSection("PayPal")} />
          <AboutMediaCarousel media={paypalMedia} onImageClick={openImagePreview} />
          <AboutTimelineCard section={getTimelineSection("Dell Technologies")} />
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Image
              className={cx(classes.item)}
              src={DellMclaren}
              onClick={() => openImagePreview(DellMclaren)}
            />
          </Paper>
          <AboutTimelineCard section={getTimelineSection("Lone Star UAS")} />
          <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
          >
            <Image
              className={cx(classes.item)}
              src={LSUAS}
              onClick={() => openImagePreview(LSUAS)}
            />
          </Paper>
        </div>

        <div>
          <AboutTimelineCard section={getTimelineSection("Texas A&M University - Corpus Christi")} />
          <AboutMediaCarousel media={educationMedia} onImageClick={openImagePreview} />
          <AboutTimelineCard section={getTimelineSection("Del Mar College")} />
          <AboutMediaCarousel media={delMarMedia} onImageClick={openImagePreview} />
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default About;
