import { useState } from "react";
import { useFullscreen } from "@mantine/hooks";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

const isFullscreenSupported = (): boolean => {
  if (typeof document === "undefined") {
    return false;
  }

  const fullscreenDocument = document as Document & {
    webkitFullscreenEnabled?: boolean;
    mozFullScreenEnabled?: boolean;
    msFullscreenEnabled?: boolean;
  };
  const fullscreenElement = document.documentElement as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  };

  const canRequestFullscreen = Boolean(
    fullscreenElement.requestFullscreen ||
      fullscreenElement.webkitRequestFullscreen ||
      fullscreenElement.mozRequestFullScreen ||
      fullscreenElement.msRequestFullscreen
  );
  const fullscreenEnabled =
    document.fullscreenEnabled ??
    fullscreenDocument.webkitFullscreenEnabled ??
    fullscreenDocument.mozFullScreenEnabled ??
    fullscreenDocument.msFullscreenEnabled;

  // Some browsers expose the request API but omit the enabled flag entirely.
  return canRequestFullscreen && fullscreenEnabled !== false;
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
