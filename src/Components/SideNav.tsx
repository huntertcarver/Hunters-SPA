import { useEffect, useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  Title,
  ActionIcon,
} from "@mantine/core";
import {
  IconHome,
  IconQuestionMark,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandTwitter,
} from "@tabler/icons";
import { Link, useLocation } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    social: {
      width: 260,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "/about", label: "About", icon: IconQuestionMark },
];

export default function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(data[0].link);
  const { height, width } = useViewportSize();
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: active === item.link,
      })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={height - 70} width={{ sm: width }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title>Hunter Carver</Title>
          <Code sx={{ fontWeight: 700 }}>Navigation</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Group spacing={0} className={classes.social} position="right">
          <a
            href="https://www.linkedin.com/in/hunter-carver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a
            href="https://github.com/huntertcarver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg">
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a
            href="https://twitter.com/huntertcarver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="mailto:hunter@1968bird.com">
            <ActionIcon size="lg">
              <IconBrandGmail size={18} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}
