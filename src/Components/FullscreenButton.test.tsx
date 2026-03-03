import { fireEvent, render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import FullscreenButton from "./FullscreenButton";

jest.mock("@mantine/hooks", () => ({
  ...jest.requireActual("@mantine/hooks"),
  useFullscreen: jest.fn(),
}));

const mockedUseFullscreen = useFullscreen as jest.MockedFunction<typeof useFullscreen>;

beforeEach(() => {
  mockedUseFullscreen.mockReturnValue({
    ref: jest.fn(),
    toggle: jest.fn(),
    fullscreen: false,
  });
});

const renderButton = () =>
  render(
    <MantineProvider theme={{ colorScheme: "light" }}>
      <FullscreenButton />
    </MantineProvider>
  );

test("disables fullscreen button when API is unsupported", () => {
  Object.defineProperty(document, "fullscreenEnabled", {
    configurable: true,
    value: false,
  });

  renderButton();

  expect(
    screen.getByLabelText("Fullscreen is not supported on this device/browser")
  ).toBeDisabled();
});

test("calls toggle when fullscreen is supported", () => {
  const toggle = jest.fn();
  mockedUseFullscreen.mockReturnValue({
    ref: jest.fn(),
    toggle,
    fullscreen: false,
  });

  Object.defineProperty(document, "fullscreenEnabled", {
    configurable: true,
    value: true,
  });

  renderButton();

  fireEvent.click(screen.getByLabelText("Toggle Fullscreen"));
  expect(toggle).toHaveBeenCalledTimes(1);
});
