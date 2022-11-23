import { Blockquote, createStyles, Paper, Text, useMantineColorScheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.colorScheme === 'dark' ? theme.fn.linearGradient(0, theme.colors.red[6], theme.colors.orange[6]) : theme.fn.linearGradient(0, theme.colors.blue[5], theme.colors.green[5]),
    },
  },
}));

interface QuoteCardProps {
  citation: string;
  quote: string;
}

export function QuoteCard({ citation, quote }: QuoteCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  var quoteColor = "";

  function colorClick(){
    quoteColor = colorScheme === "dark" ? "blue" : "lightblue";
    setTimeout(quoteColor = "", 1000);
  }

  return (
    <Paper withBorder radius="md" className={classes.card}>
        <Blockquote color={quoteColor} onClick={colorClick} cite={citation}>
            <Text size="sm" mt="sm" color="dimmed">
                {quote}
            </Text>
        </Blockquote>
    </Paper>
  );
}