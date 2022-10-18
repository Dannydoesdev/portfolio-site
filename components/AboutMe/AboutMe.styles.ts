import { createStyles } from '@mantine/core';

// border-radius: 180px;
// background-color: rgb(46 0 121 / 66%);
// #2e0079a8

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
    // backgroundColor: theme.colorScheme === 'dark' ? '#2d1259b0' : '#2b007969',
    // #2d1259b0
    // 2e0079a8
    // backgroundColor: '#2e0079a8',
    // backgroundColor: 'theme.colors.grape[9]',
    // backgroundColor: theme.colors.grape[9],
    // backgroundColor={theme.colors.grape[9]}
    // borderRadius: '120px',
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).
      background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));