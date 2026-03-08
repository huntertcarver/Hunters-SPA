import { render, screen } from "@testing-library/react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
import RoutingContainer from "./RoutingContainer";

jest.mock("./Components/HeaderMiddle", () => () => <div>Header Mock</div>);
jest.mock("./Pages/Home", () => () => <div>Home Page Mock</div>);
jest.mock("./Pages/About", () => () => <div>About Page Mock</div>);
jest.mock("./Pages/Projects", () => () => <div>Projects Page Mock</div>);

const renderAtRoute = (route: string) => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <MantineProvider theme={{ colorScheme: "light" }}>
          <RoutingContainer />
        </MantineProvider>
      </ColorSchemeProvider>
    </MemoryRouter>
  );
};

test("renders projects route content", () => {
  renderAtRoute("/projects");

  expect(screen.getByText("Projects Page Mock")).toBeInTheDocument();
});

test("renders skill fallback message for unknown skills", () => {
  renderAtRoute("/skills/UnknownSkill");

  expect(screen.getByText("This skill is not in the database.")).toBeInTheDocument();
});

test("maps /skills/C to C# skill data", () => {
  renderAtRoute("/skills/C");

  expect(screen.getByText("C#")).toBeInTheDocument();
});

test("renders skills whose route params include encoded slashes", () => {
  renderAtRoute("/skills/Incident%20Response%20%2F%20L1%20On-call");

  expect(screen.getByText("Incident Response / L1 On-call")).toBeInTheDocument();
});
