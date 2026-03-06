import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMantineTheme } from "@mantine/core";
import { IOptions, RecursivePartial } from "tsparticles-engine";

const PARTICLE_SPEED = 2;

export default function ParticlesComponent() {
  const theme = useMantineTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions: RecursivePartial<IOptions> = {
    background: {
      color: {
        value: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
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
        speed: PARTICLE_SPEED,
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

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
}