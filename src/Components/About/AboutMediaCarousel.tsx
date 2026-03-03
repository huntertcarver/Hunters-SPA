import { Carousel } from "@mantine/carousel";
import { Image, Paper, createStyles, useMantineTheme } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
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
}));

export interface AboutCarouselMedia {
  src: string;
  type?: "image" | "iframe";
  title?: string;
}

interface AboutMediaCarouselProps {
  media: AboutCarouselMedia[];
  onImageClick: (src: string) => void;
}

export default function AboutMediaCarousel({
  media,
  onImageClick,
}: AboutMediaCarouselProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
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
        {media.map((item) => (
          <Carousel.Slide key={item.src}>
            {item.type === "iframe" ? (
              <iframe
                src={item.src}
                title={item.title ?? "Embedded media"}
                className={cx(classes.item)}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <Image
                className={cx(classes.item)}
                src={item.src}
                onClick={() => onImageClick(item.src)}
              />
            )}
          </Carousel.Slide>
        ))}
      </Carousel>
    </Paper>
  );
}
