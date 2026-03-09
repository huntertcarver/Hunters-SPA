import { useEffect, useState } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

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

const getFullscreenDocument = (): FullscreenDocument | null => {
  if (typeof document === "undefined") {
    return null;
  }

  return document as FullscreenDocument;
};

const getFullscreenElement = (): Element | null => {
  const fullscreenDocument = getFullscreenDocument();

  if (!fullscreenDocument) {
    return null;
  }

  return (
    fullscreenDocument.fullscreenElement ??
    fullscreenDocument.webkitFullscreenElement ??
    fullscreenDocument.msFullscreenElement ??
    fullscreenDocument.mozFullScreenElement ??
    null
  );
};

const hasFullscreenRequestApi = (): boolean => {
  const fullscreenDocument = getFullscreenDocument();

  if (!fullscreenDocument) {
    return false;
  }

  const fullscreenElement = fullscreenDocument.documentElement as FullscreenElement;

  // Mobile browsers can report fullscreenEnabled=false while still exposing a working request API.
  return Boolean(
    typeof fullscreenElement.requestFullscreen === "function" ||
      typeof fullscreenElement.webkitRequestFullscreen === "function" ||
      typeof fullscreenElement.mozRequestFullscreen === "function" ||
      typeof fullscreenElement.msRequestFullscreen === "function"
  );
};

const requestFullscreen = async (): Promise<void> => {
  const fullscreenDocument = getFullscreenDocument();

  if (!fullscreenDocument) {
    throw new Error("Fullscreen is unavailable");
  }

  const fullscreenElement = fullscreenDocument.documentElement as FullscreenElement;

  if (typeof fullscreenElement.requestFullscreen === "function") {
    await fullscreenElement.requestFullscreen();
    return;
  }

  if (typeof fullscreenElement.webkitRequestFullscreen === "function") {
    await fullscreenElement.webkitRequestFullscreen();
    return;
  }

  if (typeof fullscreenElement.mozRequestFullscreen === "function") {
    await fullscreenElement.mozRequestFullscreen();
    return;
  }

  if (typeof fullscreenElement.msRequestFullscreen === "function") {
    await fullscreenElement.msRequestFullscreen();
    return;
  }

  throw new Error("Fullscreen is unavailable");
};

const exitFullscreen = async (): Promise<void> => {
  const fullscreenDocument = getFullscreenDocument();

  if (!fullscreenDocument) {
    throw new Error("Fullscreen is unavailable");
  }

  if (typeof fullscreenDocument.exitFullscreen === "function") {
    await fullscreenDocument.exitFullscreen();
    return;
  }

  if (typeof fullscreenDocument.webkitExitFullscreen === "function") {
    await fullscreenDocument.webkitExitFullscreen();
    return;
  }

  if (typeof fullscreenDocument.msExitFullscreen === "function") {
    await fullscreenDocument.msExitFullscreen();
    return;
  }

  if (typeof fullscreenDocument.mozCancelFullScreen === "function") {
    await fullscreenDocument.mozCancelFullScreen();
    return;
  }

  throw new Error("Fullscreen is unavailable");
};

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(() => Boolean(getFullscreenElement()));
  const [status, setStatus] = useState<"idle" | "unavailable" | "failed">("idle");

  useEffect(() => {
    const fullscreenDocument = getFullscreenDocument();

    if (!fullscreenDocument) {
      return undefined;
    }

    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(getFullscreenElement()));
    };

    const events = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
    ] as const;

    events.forEach((eventName) => {
      fullscreenDocument.addEventListener(eventName, syncFullscreenState);
    });

    return () => {
      events.forEach((eventName) => {
        fullscreenDocument.removeEventListener(eventName, syncFullscreenState);
      });
    };
  }, []);

  const buttonColor = status === "idle" ? (isFullscreen ? "red" : "blue") : "orange";
  const title =
    status === "unavailable"
      ? "Fullscreen is unavailable in this browser/device context"
      : status === "failed"
      ? "Fullscreen request failed on this browser/device"
      : isFullscreen
      ? "Exit fullscreen"
      : "Enter fullscreen";

  const handleToggle = async () => {
    if (!hasFullscreenRequestApi()) {
      setStatus("unavailable");
      return;
    }

    try {
      const currentlyFullscreen = isFullscreen || Boolean(getFullscreenElement());

      if (currentlyFullscreen) {
        await exitFullscreen();
        setIsFullscreen(false);
      } else {
        await requestFullscreen();
        // iPhone/Safari can lag on fullscreenchange, so keep local state in sync with the last action.
        setIsFullscreen(true);
      }

      setStatus("idle");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <Tooltip label={title}>
      <ActionIcon
        variant="outline"
        color={buttonColor}
        onClick={() => {
          void handleToggle();
        }}
        title={title}
        aria-label={title}
      >
        {isFullscreen ? (
          <IconArrowsMinimize style={{ width: 18, height: 18 }} />
        ) : (
          <IconArrowsMaximize style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
