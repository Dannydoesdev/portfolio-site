import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  badgeSolo: {
    // textTransform: 'uppercase',
    // fontSize: theme.fontSizes.xs,
    // fontWeight: 700,
    color: `${theme.colorScheme === 'dark' ? '#bfffae' : '#14680a'}`,
    backgroundColor: `${theme.colorScheme === 'dark' ? '#45c21933' : '#40b01a33'}`,

    // backgroundColor: `${theme.colorScheme === 'dark' ? '#92e9927a' : '#40b01a33'}`, // old - darker green in darkmode    
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    // backgroundColor: '#450079',
  },
  button: {
    backgroundColor: '#450079',
    '&:hover': {
      backgroundColor: '#6102a9',
    },
  },
}));

