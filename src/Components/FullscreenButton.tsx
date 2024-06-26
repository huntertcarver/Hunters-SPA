import { useFullscreen } from "@mantine/hooks";
import { ActionIcon } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

export default function FullscreenButtonm() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <ActionIcon
      variant="outline"
      color={fullscreen ? "red" : "blue"}
      onClick={toggle}
      title="Toggle Fullscreen"
    >
      {fullscreen ? (
        <IconArrowsMinimize style={{ width: 18, height: 18 }} />
      ) : (
        <IconArrowsMaximize style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}
