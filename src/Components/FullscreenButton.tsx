import { useState } from "react";
import { useFullscreen } from "@mantine/hooks";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize, IconArrowsDiagonalMinimize2 } from "@tabler/icons-react";

const isFullscreenSupported = (): boolean => {
  if (typeof document === "undefined") {
    return false;
  }

  const fullscreenDocument = document as Document & {
    webkitFullscreenEnabled?: boolean;
  };
  const fullscreenElement = document.documentElement as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
  };

  const canRequestFullscreen = Boolean(
    fullscreenElement.requestFullscreen || fullscreenElement.webkitRequestFullscreen
  );

  return (
    canRequestFullscreen &&
    Boolean(document.fullscreenEnabled || fullscreenDocument.webkitFullscreenEnabled)
  );
};

export default function FullscreenButton() {
  const { toggle, fullscreen } = useFullscreen();
  const [toggleFailed, setToggleFailed] = useState(false);
  const supported = isFullscreenSupported();

  const buttonColor = !supported ? "gray" : toggleFailed ? "orange" : fullscreen ? "red" : "blue";
  const title = !supported
    ? "Fullscreen is not supported on this device/browser"
    : toggleFailed
    ? "Fullscreen request failed on this browser/device"
    : "Toggle Fullscreen";

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
          if (supported) {
            void handleToggle();
          }
        }}
        title={title}
        disabled={!supported}
        aria-label={title}
      >
        {!supported ? (
          <IconArrowsDiagonalMinimize2 style={{ width: 18, height: 18 }} />
        ) : fullscreen ? (
          <IconArrowsMinimize style={{ width: 18, height: 18 }} />
        ) : (
          <IconArrowsMaximize style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
