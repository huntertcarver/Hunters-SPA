import { act, render, screen, waitFor } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import FullscreenButton from "./FullscreenButton";

type FullscreenDocument = Document & {
  webkitExitFullscreen?: () => Promise<void> | void;
  msExitFullscreen?: () => Promise<void> | void;
  mozCancelFullScreen?: () => Promise<void> | void;
  webkitFullscreenElement?: Element | null;
  msFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
};

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
  mozRequestFullscreen?: () => Promise<void> | void;
  msRequestFullscreen?: () => Promise<void> | void;
};

const fullscreenDocument = document as FullscreenDocument;
const fullscreenElement = document.documentElement as FullscreenElement;

const defineProperty = <T,>(target: object, key: string, value: T) => {
  Object.defineProperty(target, key, {
    configurable: true,
    writable: true,
    value,
  });
};

const renderButton = () =>
  render(
    <MantineProvider theme={{ colorScheme: "light" }}>
      <FullscreenButton />
    </MantineProvider>
  );

const clickButton = async (label: string) => {
  const button = screen.getByLabelText(label);

  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
};

const dispatchFullscreenChange = () => {
  act(() => {
    document.dispatchEvent(new Event("fullscreenchange"));
  });
};

beforeEach(() => {
  defineProperty(document, "fullscreenElement", null);
  defineProperty(fullscreenDocument, "webkitFullscreenElement", null);
  defineProperty(fullscreenDocument, "msFullscreenElement", null);
  defineProperty(fullscreenDocument, "mozFullScreenElement", null);
  defineProperty(document, "exitFullscreen", jest.fn().mockResolvedValue(undefined));
  defineProperty(fullscreenDocument, "webkitExitFullscreen", undefined);
  defineProperty(fullscreenDocument, "msExitFullscreen", undefined);
  defineProperty(fullscreenDocument, "mozCancelFullScreen", undefined);
  defineProperty(fullscreenElement, "requestFullscreen", jest.fn().mockResolvedValue(undefined));
  defineProperty(fullscreenElement, "webkitRequestFullscreen", undefined);
  defineProperty(fullscreenElement, "mozRequestFullscreen", undefined);
  defineProperty(fullscreenElement, "msRequestFullscreen", undefined);
});

test("enters fullscreen with the standard API", async () => {
  const requestFullscreen = jest.fn().mockResolvedValue(undefined);
  defineProperty(fullscreenElement, "requestFullscreen", requestFullscreen);

  renderButton();

  await clickButton("Enter fullscreen");

  await waitFor(() => {
    expect(requestFullscreen).toHaveBeenCalledTimes(1);
  });

  expect(screen.getByLabelText("Exit fullscreen")).toBeInTheDocument();
});

test("exits fullscreen on the second tap even if no fullscreenchange event arrives", async () => {
  const requestFullscreen = jest.fn().mockResolvedValue(undefined);
  const exitFullscreen = jest.fn().mockResolvedValue(undefined);

  defineProperty(fullscreenElement, "requestFullscreen", requestFullscreen);
  defineProperty(document, "exitFullscreen", exitFullscreen);

  renderButton();

  await clickButton("Enter fullscreen");

  await waitFor(() => {
    expect(screen.getByLabelText("Exit fullscreen")).toBeInTheDocument();
  });

  await clickButton("Exit fullscreen");

  await waitFor(() => {
    expect(exitFullscreen).toHaveBeenCalledTimes(1);
  });

  expect(screen.getByLabelText("Enter fullscreen")).toBeInTheDocument();
});

test("uses webkit exit APIs when mobile Safari reports prefixed fullscreen state", async () => {
  const webkitExitFullscreen = jest.fn().mockResolvedValue(undefined);

  defineProperty(document, "fullscreenElement", null);
  defineProperty(fullscreenDocument, "webkitFullscreenElement", document.documentElement);
  defineProperty(document, "exitFullscreen", undefined);
  defineProperty(fullscreenDocument, "webkitExitFullscreen", webkitExitFullscreen);

  renderButton();

  await clickButton("Exit fullscreen");

  await waitFor(() => {
    expect(webkitExitFullscreen).toHaveBeenCalledTimes(1);
  });
});

test("syncs the button state from document fullscreenchange events", async () => {
  renderButton();

  defineProperty(document, "fullscreenElement", document.documentElement);
  dispatchFullscreenChange();

  await waitFor(() => {
    expect(screen.getByLabelText("Exit fullscreen")).toBeInTheDocument();
  });

  defineProperty(document, "fullscreenElement", null);
  dispatchFullscreenChange();

  await waitFor(() => {
    expect(screen.getByLabelText("Enter fullscreen")).toBeInTheDocument();
  });
});

test("shows unavailable state when request API is unavailable", async () => {
  defineProperty(fullscreenElement, "requestFullscreen", undefined);
  defineProperty(fullscreenElement, "webkitRequestFullscreen", undefined);
  defineProperty(fullscreenElement, "mozRequestFullscreen", undefined);
  defineProperty(fullscreenElement, "msRequestFullscreen", undefined);

  renderButton();

  await clickButton("Enter fullscreen");

  await waitFor(() => {
    expect(
      screen.getByLabelText("Fullscreen is unavailable in this browser/device context")
    ).toBeInTheDocument();
  });
});

test("shows failure state when fullscreen request throws", async () => {
  defineProperty(
    fullscreenElement,
    "requestFullscreen",
    jest.fn().mockRejectedValue(new Error("fullscreen failed"))
  );

  renderButton();

  await clickButton("Enter fullscreen");

  await waitFor(() => {
    expect(
      screen.getByLabelText("Fullscreen request failed on this browser/device")
    ).toBeInTheDocument();
  });
});
