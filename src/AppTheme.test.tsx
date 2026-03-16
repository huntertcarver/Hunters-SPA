import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./RoutingContainer", () => {
  const React = require("react");
  const { useMantineColorScheme } = require("@mantine/core");

  return function RoutingContainerMock() {
    const { colorScheme } = useMantineColorScheme();

    return <div data-testid="color-scheme">{colorScheme}</div>;
  };
});

const setMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe("App theme defaults", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("defaults to dark when the OS preference is dark", () => {
    setMatchMedia(true);

    render(<App />);

    expect(screen.getByTestId("color-scheme")).toHaveTextContent("dark");
  });

  test("defaults to light when the OS preference is light", () => {
    setMatchMedia(false);

    render(<App />);

    expect(screen.getByTestId("color-scheme")).toHaveTextContent("light");
  });

  test("keeps a stored user preference over the OS preference", () => {
    setMatchMedia(true);
    window.localStorage.setItem("mantine-color-scheme", JSON.stringify("light"));

    render(<App />);

    expect(screen.getByTestId("color-scheme")).toHaveTextContent("light");
  });
});
