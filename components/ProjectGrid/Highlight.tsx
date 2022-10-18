import { Highlight } from '@mantine/core';
// import useStyles from './Grid.styles';

export default function TextHighlight() {
  // const { classes } = useStyles();

  return (
    <Highlight
      align="center"
      highlight={'Projects'}
      highlightColor="violet"
      underline={true}
      highlightStyles={(theme) => ({
        backgroundImage: theme.fn.linearGradient(45, theme.colors.grape[5], theme.colors.violet[8]),
        // backgroundColor: "white",
        // backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).
        // background,
        fontWeight: 700,
        fontSize: 65,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      })}
    >
      {/* <span className={classes.highlight}> Projects </span> */}
      Projects
    </Highlight>
  );
}
