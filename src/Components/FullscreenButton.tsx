import { useState } from "react";
import { useFullscreen } from "@mantine/hooks";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

const hasFullscreenRequestApi = (): boolean => {
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
  const [status, setStatus] = useState<"idle" | "unavailable" | "failed">("idle");
  const buttonColor = status === "idle" ? (fullscreen ? "red" : "blue") : "orange";
  const title =
    status === "unavailable"
      ? "Fullscreen is unavailable in this browser/device context"
      : status === "failed"
      ? "Fullscreen request failed on this browser/device"
      : "Toggle Fullscreen";

  const handleToggle = async () => {
    if (!hasFullscreenRequestApi()) {
      setStatus("unavailable");
      return;
    }

    try {
      await toggle();
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
        {fullscreen ? (
          <IconArrowsMinimize style={{ width: 18, height: 18 }} />
        ) : (
          <IconArrowsMaximize style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
