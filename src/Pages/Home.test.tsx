import { render, screen } from "@testing-library/react";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { getHomeSectionBackgroundColor } from "../styles/uiTokens";

jest.mock("typewriter-effect", () => ({
  __esModule: true,
  default: ({ options }: { options: { strings: string[] } }) => <span>{options.strings[0]}</span>,
}));

jest.mock("../Components/Ripple", () => () => <div>Ripple</div>);

jest.mock("@react-spring/parallax", () => {
  const React = require("react");

  return {
    Parallax: React.forwardRef(
      (
        {
          children,
          style,
        }: {
          children: React.ReactNode;
          style?: React.CSSProperties;
        },
        ref: React.Ref<{
          scrollTo: (page: number) => void;
          container: { current: HTMLDivElement | null };
        }>
      ) => {
        const containerRef = React.useRef(null);

        React.useImperativeHandle(ref, () => ({
          scrollTo: jest.fn(),
          container: { current: containerRef.current },
        }));

        return (
          <div ref={containerRef} style={style}>
            {children}
          </div>
        );
      }
    ),
    ParallaxLayer: ({
      children,
      style,
    }: {
      children: React.ReactNode;
      style?: React.CSSProperties;
    }) => <div style={style}>{children}</div>,
  };
});

beforeAll(() => {
  Object.defineProperty(window, "requestAnimationFrame", {
    writable: true,
    value: jest.fn(() => 0),
  });

  Object.defineProperty(window, "cancelAnimationFrame", {
    writable: true,
    value: jest.fn(),
  });
});

const renderHome = (colorScheme: ColorScheme) =>
  render(
    <MemoryRouter initialEntries={["/"]}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
        <MantineProvider theme={{ colorScheme }}>
          <Home />
        </MantineProvider>
      </ColorSchemeProvider>
    </MemoryRouter>
  );

const normalizeColor = (color: string): string => {
  const element = document.createElement("div");
  element.style.backgroundColor = color;

  return element.style.backgroundColor;
};

test("applies a visible surface background to the hero in light mode", () => {
  renderHome("light");

  expect(screen.getByTestId("home-parallax-surface").style.backgroundColor).not.toBe("");
});

test("matches the expected light mode hero surface color", () => {
  const view = renderHome("light");
  const lightBackgroundColor = screen.getByTestId("home-parallax-surface").style.backgroundColor;
  const expectedLightBackgroundColor = normalizeColor(
    getHomeSectionBackgroundColor(
      {
        colorScheme: "light",
        colors: {
          dark: [
            "#C1C2C5",
            "#A6A7AB",
            "#909296",
            "#5C5F66",
            "#373A40",
            "#2C2E33",
            "#25262B",
            "#1A1B1E",
            "#141517",
            "#101113",
          ],
        },
        fn: {
          variant: () => ({
            background: "#e7f5ff",
          }),
        },
        primaryColor: "blue",
        white: "#ffffff",
      } as never
    )
  );

  expect(lightBackgroundColor).toBe(expectedLightBackgroundColor);
  view.unmount();
});

test("matches the expected dark mode hero surface color", () => {
  renderHome("dark");
  const darkBackgroundColor = screen.getByTestId("home-parallax-surface").style.backgroundColor;
  const expectedDarkBackgroundColor = normalizeColor("#141517");

  expect(darkBackgroundColor).not.toBe("");
  expect(darkBackgroundColor).toBe(expectedDarkBackgroundColor);
});
