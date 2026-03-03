import { useEffect } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Title,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LightDarkButton from "./LightDarkButton";
import FullscreenButton from "./FullscreenButton";
import { Link, useLocation } from "react-router-dom";
import SideNav from "./SideNav";
import { NavLinkItem, profileConfig, socialLinks } from "../Data/siteConfig";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  title: {
    [theme.fn.largerThan("md")]: {
      fontSize: 28,
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderMiddleProps {
  links: NavLinkItem[];
}

export default function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { close, toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const location = useLocation();

  useEffect(() => {
    close();
  }, [close, location.pathname]);

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: location.pathname === link.link,
      })}
    >
      {link.label}
    </Link>
  ));

  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <Header height={56} mb={0}>
        <Container className={classes.inner} size="xl">
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
            aria-label={opened ? "Close navigation menu" : "Open navigation menu"}
          />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <Title className={classes.title} size={16}>
            {profileConfig.name}
          </Title>

          <Group>
            <Group
              spacing={0}
              className={classes.social}
              position="right"
              noWrap
            >
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                >
                  <ActionIcon size="lg" aria-label={label}>
                    <Icon size={18} stroke={1.5} />
                  </ActionIcon>
                </a>
              ))}
            </Group>
            <Group spacing={0} position="right">
              <FullscreenButton />
            </Group>
            <Group spacing={0} position="right">
              <LightDarkButton />
            </Group>
          </Group>
        </Container>
      </Header>
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="100%"
        withCloseButton
        title="Navigation"
        zIndex={200}
      >
        <SideNav links={links} onNavigate={close} socialLinks={socialLinks} />
      </Drawer>
    </div>
  );
}
