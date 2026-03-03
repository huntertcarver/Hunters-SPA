import {
  Blockquote,
  createStyles,
  Paper,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { getAccentGradientColors } from "../styles/uiTokens";

const useStyles = createStyles((theme) => {
  const [accentFrom, accentTo] = getAccentGradientColors(theme);

  return {
    card: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    marginBottom: theme.spacing.xl,
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
  },
  };
});

interface QuoteCardProps {
  citation: string;
  quote: string;
  inCarousel?: boolean;
}

export function QuoteCard({ citation, quote, inCarousel = false }: QuoteCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  var quoteColor = colorScheme === "dark" ? "blue" : "lightblue";

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      style={{
        boxShadow: theme.shadows.xl,
        marginBottom: inCarousel ? 0 : undefined,
        width: inCarousel ? "95%" : undefined,
        marginLeft: inCarousel ? "auto" : undefined,
        marginRight: inCarousel ? "auto" : undefined,
      }}
    >
      <Blockquote color={quoteColor} cite={citation}>
        <Text size="sm" mt="sm" color="dimmed">
          {quote}
        </Text>
      </Blockquote>
    </Paper>
  );
}
