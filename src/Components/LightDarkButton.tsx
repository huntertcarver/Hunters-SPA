import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

function LightDarkButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="App">
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? (
          <IconSun style={{ width: 18, height: 18 }} />
        ) : (
          <IconMoon style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>
    </div>
  );
}

export default LightDarkButton;
