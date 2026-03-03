import { MantineTheme } from "@mantine/core";

export const getHeroTitleGradient = (theme: MantineTheme) => ({
  from: theme.colorScheme === "dark" ? "lightblue" : "blue",
  to: theme.colorScheme === "dark" ? "white" : "black",
});

export const getAccentGradientColors = (
  theme: MantineTheme
): [string, string] =>
  theme.colorScheme === "dark"
    ? [theme.colors.red[6], theme.colors.orange[6]]
    : [theme.colors.blue[5], theme.colors.green[5]];

export const getSurfaceButtonColor = (theme: MantineTheme): string =>
  theme.colorScheme === "dark" ? "#000000" : "#ffffff";
