import { Text, createStyles } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  root: {
    maxWidth: "100%",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.md,
    minWidth: 0,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing.sm,
    },
  },

  avatarFrame: {
    flexShrink: 0,
    width: 118,
    borderRadius: theme.radius.md,
    overflow: "hidden",

    [theme.fn.smallerThan("sm")]: {
      width: 108,
    },
  },

  avatarImage: {
    display: "block",
    width: "100%",
    height: "auto",
  },

  details: {
    minWidth: 0,
    flex: 1,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },

  metaRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing.xs,
    minWidth: 0,
    marginTop: theme.spacing.xs,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
  },

  metaText: {
    minWidth: 0,
    flex: 1,
    maxWidth: "100%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    lineHeight: 1.4,

    [theme.fn.smallerThan("sm")]: {
      flex: "0 1 220px",
      textAlign: "center",
    },
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export default function UserInfoIcons({ avatar, name, title, phone, email }: UserInfoIconsProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <div className={classes.avatarFrame}>
          <img src={avatar} alt={name} className={classes.avatarImage} />
        </div>
        <div className={classes.details}>
          <Text size="xs" sx={{ textTransform: "uppercase" }} weight={700} color="dimmed">
            {title}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {name}
          </Text>

          <div className={classes.metaRow}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" color="dimmed" className={classes.metaText}>
              {email}
            </Text>
          </div>

          <div className={classes.metaRow}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" color="dimmed" className={classes.metaText}>
              {phone}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
