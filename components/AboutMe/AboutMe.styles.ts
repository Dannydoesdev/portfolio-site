import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(40),
    paddingBottom: rem(30),
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
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
    marginTop: theme.spacing.lg,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: rem(5),
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));
