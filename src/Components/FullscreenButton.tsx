import { useState } from "react";
import { useFullscreen } from "@mantine/hooks";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

const isFullscreenSupported = (): boolean => {
  if (typeof document === "undefined") {
    return false;
  }

  const fullscreenElement = document.documentElement as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  };

  // Mobile browsers can report fullscreenEnabled=false while still exposing a working request API.
  return Boolean(
    typeof fullscreenElement.requestFullscreen === "function" ||
      typeof fullscreenElement.webkitRequestFullscreen === "function" ||
      typeof fullscreenElement.mozRequestFullscreen === "function" ||
      typeof fullscreenElement.msRequestFullscreen === "function"
  );
};

export default function FullscreenButton() {
  const { toggle, fullscreen } = useFullscreen();
  const [toggleFailed, setToggleFailed] = useState(false);
  const supported = isFullscreenSupported();

  // Hide the control on browsers like iPhone Safari that cannot fullscreen arbitrary elements.
  if (!supported) {
    return null;
  }

  const buttonColor = toggleFailed ? "orange" : fullscreen ? "red" : "blue";
  const title = toggleFailed ? "Fullscreen request failed on this browser/device" : "Toggle Fullscreen";

  const handleToggle = async () => {
    try {
      await toggle();
      setToggleFailed(false);
    } catch {
      setToggleFailed(true);
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
        {fullscreen ? (
          <IconArrowsMinimize style={{ width: 18, height: 18 }} />
        ) : (
          <IconArrowsMaximize style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
