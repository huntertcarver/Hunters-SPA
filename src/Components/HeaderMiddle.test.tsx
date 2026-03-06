import { fireEvent, render, screen, within } from "@testing-library/react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
import HeaderMiddle from "./HeaderMiddle";
import { primaryNavLinks } from "../Data/siteConfig";

const renderHeader = () =>
  render(
    <MemoryRouter initialEntries={["/"]}>
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <MantineProvider theme={{ colorScheme: "light" }}>
          <HeaderMiddle links={primaryNavLinks} />
        </MantineProvider>
      </ColorSchemeProvider>
    </MemoryRouter>
  );

test("opens mobile navigation drawer when burger is clicked", () => {
  renderHeader();

  fireEvent.click(screen.getByLabelText("Open navigation menu"));

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(within(dialog).getByRole("link", { name: "About" })).toBeInTheDocument();
});

test("closes mobile drawer after navigating from drawer link", () => {
  renderHeader();

  fireEvent.click(screen.getByLabelText("Open navigation menu"));
  const dialog = screen.getByRole("dialog");
  fireEvent.click(within(dialog).getByText("About"));

  expect(screen.getByLabelText("Open navigation menu")).toBeInTheDocument();
});

test("keeps mobile drawer open when burger receives rapid repeated taps", () => {
  renderHeader();

  const burger = screen.getByLabelText("Open navigation menu");
  fireEvent.click(burger);
  fireEvent.click(burger);

  expect(screen.getByRole("dialog")).toBeInTheDocument();
});
