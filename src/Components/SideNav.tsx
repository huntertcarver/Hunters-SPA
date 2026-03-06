import { useEffect, useState } from "react";
import {
  createStyles,
  Group,
  Code,
  Title,
  ActionIcon,
  Stack,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import {
  NavLinkItem,
  primaryNavLinks,
  profileConfig,
  socialLinks as defaultSocialLinks,
  SocialLinkItem,
} from "../Data/siteConfig";

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
      width: "100%",
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

interface SideNavProps {
  links?: NavLinkItem[];
  socialLinks?: SocialLinkItem[];
  onNavigate?: () => void;
}

export default function SideNav({
  links = primaryNavLinks,
  socialLinks = defaultSocialLinks,
  onNavigate,
}: SideNavProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0]?.link ?? "/");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const navLinks = links.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: active === item.link,
      })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.link);
        onNavigate?.();
      }}
    >
      {item.icon ? <item.icon className={classes.linkIcon} stroke={1.5} /> : null}
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Stack justify="space-between" sx={{ minHeight: "calc(100vh - 120px)" }}>
      <div>
        <Group className={classes.header} position="apart">
          <Title>{profileConfig.name}</Title>
          <Code sx={{ fontWeight: 700 }}>Navigation</Code>
        </Group>
        {navLinks}
      </div>

      <div className={classes.footer}>
        <Group spacing={0} className={classes.social} position="right">
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
      </div>
    </Stack>
  );
}
