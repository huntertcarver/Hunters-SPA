import {
  Button,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Text,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import RoutingContainer from "./RoutingContainer";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const SkillModal = ({
    context,
    id,
    innerProps,
  }: ContextModalProps<{ modalBody: string }>) => (
    <>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
        Cool!
      </Button>
    </>
  );

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            shadows: {
              md: "1px 1px 3px rgba(0, 0, 0, .25)",
              xl: "10px 10px 6px rgba(0, 0, 0, .25)",
            },
          }}
        >
          <ModalsProvider
            modals={{ demonstration: SkillModal /* ...other modals */ }}
          >
            <RoutingContainer />
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
