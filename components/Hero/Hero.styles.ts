import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    // backgroundColor: '#11284b',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundImage:
      // 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
      // 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/img/hero-face.png)',
      'linear-gradient(250deg, rgb(63 100 10 / 0%) 0%, #0e0d0deb 70%),url(/img/hero/hero-face-bw-sml.jpg)',
      // 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/img/hero/hero-face-bw-sml.jpg)',
    paddingTop: theme.spacing.xl * 10,
    paddingBottom: theme.spacing.xl * 3,
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
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  name: {
    lineHeight: 1.05,
    fontSize: '150px',
    backgroundImage: 'linear-gradient(45deg, #460376 0% 0%, #8700edf7 100% 100%)',
    marginLeft: '-10px',

    [theme.fn.smallerThan('md')]: {
      
      fontSize: '110px',
      marginLeft: '-5px',

      // lineHeight: 1.15,
      // backgroundImage: 'linear-gradient(45deg, #36005dfc 0% 0%, #8700edba 100% 100%)',

      // Try -5px margin-left && 110 font-size
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 440,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));