import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import { QuoteEntry } from "../../Data/aboutContent";
import { QuoteCard } from "../QuoteCard";

const useStyles = createStyles((theme, _params, getRef) => ({
  centerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

interface AboutQuotesCarouselProps {
  quotes: QuoteEntry[];
}

export default function AboutQuotesCarousel({ quotes }: AboutQuotesCarouselProps) {
  const { classes, cx } = useStyles();

  return (
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
      {quotes.map((quote) => (
        <Carousel.Slide
          className={cx(classes.centerItem)}
          key={`${quote.citation}-${quote.quote.slice(0, 20)}`}
        >
          <QuoteCard quote={quote.quote} citation={quote.citation} inCarousel />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
