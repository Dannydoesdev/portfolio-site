import { BackgroundImage, createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  stack: {
    alignItems: 'stretch',

    [theme.fn.smallerThan('md')]: {
      // width: '50%',
      alignItems: 'center',
      // justifyContent: 'center',
    },
  },

  container: {
    borderRadius: 8,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[2] : '',
    [theme.fn.smallerThan('md')]: {
      width: '55%',
      marginBottom: '15px',
      paddingBottom: '5px',
    },
  },

  heading: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[6] : '',
  },

  highlight: {
    //   // backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
    padding: 10,
    paddingTop: 0,
    paddingBottom: 5,
    borderRadius: theme.radius.sm,
    // display: 'inline-block',
    fontSize: '26px',

    [theme.fn.smallerThan('md')]: {
      fontSize: '24px',
    },
  },

  img: {
    [theme.fn.smallerThan('md')]: {
      height: '30px',
    },
  },
}));
