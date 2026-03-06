import { Container } from "@mantine/core";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <Container my="md" size="lg">
      <div>
        <ProjectCard projectTitle="Review Master" />
      </div>
    </Container>
  );
}

export default Projects;