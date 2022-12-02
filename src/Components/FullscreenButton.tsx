import { useFullscreen } from "@mantine/hooks";
import { ActionIcon, Button } from "@mantine/core";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons";

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
