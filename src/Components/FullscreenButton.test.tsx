import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import FullscreenButton from "./FullscreenButton";

jest.mock("@mantine/hooks", () => ({
  ...jest.requireActual("@mantine/hooks"),
  useFullscreen: jest.fn(),
}));

const mockedUseFullscreen = useFullscreen as jest.MockedFunction<typeof useFullscreen>;

beforeEach(() => {
  Object.defineProperty(document.documentElement, "requestFullscreen", {
    configurable: true,
    value: jest.fn(),
  });
  Object.defineProperty(document, "fullscreenEnabled", {
    configurable: true,
    value: undefined,
  });

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

test("renders fullscreen button when requestFullscreen exists even if fullscreenEnabled is false", () => {
  const toggle = jest.fn();
  mockedUseFullscreen.mockReturnValue({
    ref: jest.fn(),
    toggle,
    fullscreen: false,
  });

  Object.defineProperty(document, "fullscreenEnabled", {
    configurable: true,
    value: false,
  });

  renderButton();

  fireEvent.click(screen.getByLabelText("Toggle Fullscreen"));
  expect(toggle).toHaveBeenCalledTimes(1);
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

test("treats requestFullscreen as supported when fullscreenEnabled is unavailable", () => {
  const toggle = jest.fn();
  mockedUseFullscreen.mockReturnValue({
    ref: jest.fn(),
    toggle,
    fullscreen: false,
  });

  renderButton();

  fireEvent.click(screen.getByLabelText("Toggle Fullscreen"));
  expect(toggle).toHaveBeenCalledTimes(1);
});

test("renders fullscreen button when only webkitRequestFullscreen exists", () => {
  const toggle = jest.fn();
  mockedUseFullscreen.mockReturnValue({
    ref: jest.fn(),
    toggle,
    fullscreen: false,
  });

  Object.defineProperty(document.documentElement, "requestFullscreen", {
    configurable: true,
    value: undefined,
  });
  Object.defineProperty(document.documentElement, "webkitRequestFullscreen", {
    configurable: true,
    value: jest.fn(),
  });

  renderButton();

  fireEvent.click(screen.getByLabelText("Toggle Fullscreen"));
  expect(toggle).toHaveBeenCalledTimes(1);
});

test("shows unavailable state when request API is unavailable", () => {
  const toggle = jest.fn();
  mockedUseFullscreen.mockReturnValue({
    ref: jest.fn(),
    toggle,
    fullscreen: false,
  });

  Object.defineProperty(document.documentElement, "requestFullscreen", {
    configurable: true,
    value: undefined,
  });
  Object.defineProperty(document.documentElement, "webkitRequestFullscreen", {
    configurable: true,
    value: undefined,
  });
  Object.defineProperty(document.documentElement, "mozRequestFullscreen", {
    configurable: true,
    value: undefined,
  });
  Object.defineProperty(document.documentElement, "msRequestFullscreen", {
    configurable: true,
    value: undefined,
  });

  renderButton();

  fireEvent.click(screen.getByLabelText("Toggle Fullscreen"));

  expect(
    screen.getByLabelText("Fullscreen is unavailable in this browser/device context")
  ).toBeInTheDocument();
  expect(toggle).not.toHaveBeenCalled();
});

test("shows failure state when fullscreen request throws", async () => {
  const toggle = jest.fn().mockRejectedValue(new Error("fullscreen failed"));
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

  await waitFor(() => {
    expect(
      screen.getByLabelText("Fullscreen request failed on this browser/device")
    ).toBeInTheDocument();
  });
});
