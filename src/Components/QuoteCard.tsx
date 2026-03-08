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
      width: "100%",
      boxSizing: "border-box",
      maxWidth: "100%",

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

      [theme.fn.smallerThan("sm")]: {
        marginBottom: theme.spacing.lg,
        width: "calc(100% - 24px)",
        marginLeft: "auto",
        marginRight: "auto",
        padding: theme.spacing.sm,
        paddingLeft: theme.spacing.lg,
      },

      [theme.fn.smallerThan("xs")]: {
        width: "calc(100% - 16px)",
        padding: theme.spacing.xs,
        paddingLeft: theme.spacing.md,
      },
    },

    quoteText: {
      overflowWrap: "anywhere",
      lineHeight: 1.6,

      [theme.fn.smallerThan("xs")]: {
        fontSize: theme.fontSizes.xs,
      },
    },

    blockquote: {
      margin: 0,
      padding: 0,
      paddingLeft: theme.spacing.xl,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: theme.spacing.md,
      },

      [theme.fn.smallerThan("xs")]: {
        paddingLeft: theme.spacing.sm,
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
      <Blockquote color={quoteColor} cite={citation} className={classes.blockquote}>
        <Text size="sm" mt="sm" color="dimmed" className={classes.quoteText}>
          {quote}
        </Text>
      </Blockquote>
    </Paper>
  );
}
