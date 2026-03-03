import { useFullscreen } from "@mantine/hooks";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize, IconArrowsDiagonalMinimize2 } from "@tabler/icons-react";

const isFullscreenSupported = (): boolean => {
  if (typeof document === "undefined") {
    return false;
  }

  return Boolean(
    document.fullscreenEnabled ||
      (document as Document & { webkitFullscreenEnabled?: boolean }).webkitFullscreenEnabled
  );
};

export default function FullscreenButton() {
  const { toggle, fullscreen } = useFullscreen();
  const supported = isFullscreenSupported();

  const buttonColor = !supported ? "gray" : fullscreen ? "red" : "blue";
  const title = supported
    ? "Toggle Fullscreen"
    : "Fullscreen is not supported on this device/browser";

  return (
    <Tooltip label={title}>
      <ActionIcon
        variant="outline"
        color={buttonColor}
        onClick={() => {
          if (supported) {
            void toggle();
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
