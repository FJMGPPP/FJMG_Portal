import { createStyles, Container, Group} from '@mantine/core';
import { useState } from 'react';
import { Footer} from '@mantine/core';
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: "10vh",
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      color:"#808080",
      marginTop: theme.spacing.md,
      textDecoration : "none",
    },
    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
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
      color: theme.colors.gray[9]
    },
  },
}));


export default function SimpleFooter({ links }) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Footer className={classes.footer}>
      <Container className={classes.inner}>
        <Group size={28}/>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </Footer>
  );
}
