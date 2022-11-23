import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandLinkedin, IconBrandGithub, IconBrandGmail, IconBrandDiscord } from '@tabler/icons';
import LightDarkButton from './LightDarkButton';
import { Link, useLocation } from 'react-router-dom';
import NavbarSimple from './SideNav';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  title: {
    [theme.fn.largerThan('md')]: {
      fontSize: 28,
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export default function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const location = useLocation();

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
      onLoad={() => {
        alert('loaded');
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <div>
      <Header height={56} mb={0}>
        <Container className={classes.inner}>
          <Burger opened={opened} onClick={() => {toggle(); document.body.style.overflow = opened ? 'scroll' : 'hidden';}} size="sm" className={classes.burger} />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          {/*Logo goes here
          <MantineLogo size={28} />*/}
          <Title className={classes.title} size={16}>Hunter Carver</Title>

          <Group>
            <Group spacing={0} className={classes.social} position="right" noWrap>
              <a href="https://www.linkedin.com/in/hunter-carver/" target="_blank" rel="noopener noreferrer">
                <ActionIcon size="lg">
                  <IconBrandLinkedin size={18} stroke={1.5} />
                </ActionIcon>
              </a>
              <a href="https://github.com/huntertcarver" target="_blank" rel="noopener noreferrer">
                <ActionIcon size="lg">
                  <IconBrandGithub size={18} stroke={1.5} />
                </ActionIcon>
              </a>
              <a href="mailto:hunter@1968bird.com">
                <ActionIcon size="lg">
                  <IconBrandGmail size={18} stroke={1.5} />
                </ActionIcon>
              </a>
              <ActionIcon size="lg">
                <IconBrandDiscord size={18} stroke={1.5} />
              </ActionIcon>
            </Group>
            <Group spacing={0} position="right">
              <LightDarkButton />
            </Group>
          </Group>
        </Container>
      </Header>
      <Group style={{display: opened ? 'block' : 'none'}}>
        <NavbarSimple />
      </Group>
    </div>
  );
}