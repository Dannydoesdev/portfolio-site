import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    // color: theme.colorScheme === 'dark' ? 'white' : 'black',
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).
      background,
    // textDecorationLine: 'underline',
    // fontStyle: 'italic',
    padding: 40,
    // textShadow: 'purple -5px 4px 5px',
    boxShadow: '-12px 8px 13px 5px #400d5f',
    fontWeight: 700,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    // color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },

}));