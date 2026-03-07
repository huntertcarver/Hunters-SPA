import { render, screen } from "@testing-library/react";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

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

test("applies a visible surface background to the hero in light mode", () => {
  renderHome("light");

  expect(screen.getByTestId("home-parallax-surface").style.backgroundColor).not.toBe("");
});

test("uses different hero surface colors across color schemes", () => {
  const view = renderHome("light");
  const lightBackgroundColor = screen.getByTestId("home-parallax-surface").style.backgroundColor;

  view.unmount();

  renderHome("dark");
  const darkBackgroundColor = screen.getByTestId("home-parallax-surface").style.backgroundColor;

  expect(lightBackgroundColor).not.toBe("");
  expect(darkBackgroundColor).not.toBe("");
  expect(lightBackgroundColor).not.toBe(darkBackgroundColor);
});
