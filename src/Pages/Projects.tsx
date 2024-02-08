import React from 'react';
import ParticlesComponent from '../Components/ParticlesComponent';
import { Container } from '@mantine/core';
import ProjectCard from '../Components/ProjectCard';

function Project() {

    return (
        <Container my="md" size="lg">
          <ParticlesComponent />
            <div>
                <ProjectCard projectTitle={"Review Master"} />
            </div>
        </Container>
    );
}

export default Project;