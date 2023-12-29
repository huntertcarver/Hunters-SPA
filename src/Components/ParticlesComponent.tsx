import React, { useCallback, useEffect, useState } from 'react';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMantineTheme } from "@mantine/core";
import { IOptions, RecursivePartial } from 'tsparticles-engine';

export default function ParticlesComponent() {
    const [speed, setSpeed] = useState(2);
    const theme = useMantineTheme();
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSpeed(oldSpeed => (oldSpeed === 2 ? 2.01 : 2)); // Slightly change speed to trigger reinitialization
        }, 50000);

        return () => clearInterval(interval);
    }, []);

    // const particlesLoaded = useCallback(async (container: Container | undefined) => {
    //     const updateSpeed = () => {
    //       const particles = container?.particles.array;
    //       if (particles) {
    //         particles.forEach(particle => {
    //           particle.velocity.x = fixedSpeed; // Set a fixed horizontal speed
    //           particle.velocity.y = fixedSpeed;   // Set a fixed vertical speed
    //         });
    //       }
    //     };
      
    //     setInterval(updateSpeed, 100); // Update every 100 milliseconds
    //   }, []);

    const particlesOptions: RecursivePartial<IOptions> = {
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                        }).color,
                },
                links: {
                    color: theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                        }).color,
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: speed,
                    straight: false,
                },
                number: {
                    max: 200,
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
};