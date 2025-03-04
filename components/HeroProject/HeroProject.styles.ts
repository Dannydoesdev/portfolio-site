import { createStyles, rem } from '@mantine/core';

export default createStyles((theme, {project}: any) => ({

  hero: {
    position: 'relative',
    backgroundImage: `url(/img/heroproject/${project}.jpg)`,
    // backgroundImage: 'url(/img/heroproject/flyre.jpg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },

  gitconnect: {
    position: 'relative',
    backgroundImage:
      'url(/img/heroproject/gitconnect.jpg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: rem(600),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl}) * 1.5`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));
