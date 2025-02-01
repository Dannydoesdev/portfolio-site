import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    // backgroundColor: '#11284b',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgb(63 100 10 / 0%) 0%, #0e0d0deb 70%),url(/img/hero/hero-face-bw-sml.jpg)',
    paddingTop: `calc(${theme.spacing.xl} * 10)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  name: {
    lineHeight: 1.05,
    fontSize: rem(160),
    backgroundImage: 'linear-gradient(45deg, #460376 0% 0%, #8700edf7 100% 100%)',
    marginLeft: rem(-10),

    [theme.fn.smallerThan('md')]: {
      
      fontSize: rem(110),
      marginLeft: rem(-5),
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(480),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));