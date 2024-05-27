import React, { useRef } from 'react';
import { Paper, Tabs, Title, createStyles, useMantineTheme } from '@mantine/core';
import { IconDeviceTv } from '@tabler/icons-react';

const useStyles = createStyles((theme, _params, getRef) => ({
    title: {
      [theme.fn.smallerThan("md")]: {
        fontSize: 18,
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    centerItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    page: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      position: "relative",
      overflow: "hidden",
      transition: "transform 150ms ease, box-shadow 100ms ease",
      marginBottom: theme.spacing.xl,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
  
      "&:hover": {
        transform: "scale(1.02)",
      },
    },
    button: {
      backgroundColor: theme.colorScheme === "dark" ? "#000000" : "#ffffff",
      margin: theme.spacing.xl,
  
      "&:hover": {
        boxShadow: theme.shadows.md,
        transform: "scale(1.02)",
      },
    },
    iframeWrapper: {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // Aspect ratio of 16:9
        height: 0,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
    item: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        outline: 'none',
        border: 'none',
    },
  }));

function ProjectCard({ projectTitle }: { projectTitle: string }) {
    const { classes, cx } = useStyles();
    const theme = useMantineTheme();
    const videoTabRef = useRef<HTMLButtonElement>(null);

    return (
        <Paper
            withBorder
            p="md"
            radius="md"
            className={cx(classes.card)}
            style={{ boxShadow: theme.shadows.xl }}
        >
            <Tabs defaultValue="Video">
                <Tabs.List position="right">
                    <Title order={3}
                    mr="auto"
                    variant="gradient"
                    className={cx(classes.title)}
                    gradient={{
                        from: theme.colorScheme === "dark" ? theme.colors.red[6] : theme.colors.blue[5],
                        to: theme.colorScheme === "dark" ? theme.colors.orange[6] : theme.colors.green[5],
                    }}>
                        {projectTitle}
                    </Title>
                    <Tabs.Tab value="Video" ref={videoTabRef} icon={<IconDeviceTv size={14} />}>
                        Video
                    </Tabs.Tab>
                    {/* <Tabs.Tab value="Description" ref={descriptionTabRef} icon={<IconFileText size={14} />}>
                        Description
                    </Tabs.Tab> */}
                </Tabs.List>
            </Tabs>
            <div className={cx(classes.iframeWrapper)}>
                <iframe
                    src="https://www.youtube.com/embed/O8z4Le83WaI?si=IH6vZXmYYFvg-agk" allowFullScreen={true} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={cx(classes.item)}
                ></iframe>
            </div>
        </Paper>
    );
}

export default ProjectCard;