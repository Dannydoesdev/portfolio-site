import { BackgroundImage, createStyles } from '@mantine/core';

export default createStyles((theme) => ({

    title: {
      fontSize: '35px',
      textAlign: 'center',
      // textTransform: 'uppercase',
      // fontWeight: 800,
      // fontSize: theme.fontSizes.xl,
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
      // color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      letterSpacing: 0.5,
  
      backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff',
      padding: 40,
      paddingTop: 0,
      paddingBottom: 5,
      borderRadius: theme.radius.sm,
      display: 'inline-block',
  
      [theme.fn.smallerThan('sm')]: {
  
        fontSize: '30px',
        //   marginLeft: '-5px',
  
      },
  
  
    },
    highlight: {
      // backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff',
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
      padding: 10,
      paddingTop: 0,
      paddingBottom: 5,
      borderRadius: theme.radius.sm,
      // display: 'inline-block',
      fontSize: '42px',
  
      [theme.fn.smallerThan('md')]: {
        fontSize: '30px',
      },
    },
  
    stack: {
      alignItems: 'center',
  
      [theme.fn.smallerThan('md')]: {
        padding: '0px, 15px',
      },
    },
  
    src: {
      src: theme.colorScheme === 'dark' ? "https://skillicons.dev/icons?i=react,flutter,nodejs,html,css,firebase,js&perline=5&theme=dark" : "https://skillicons.dev/icons?i=react,flutter,nodejs,html,css,firebase,js&perline=5&theme=light",
    },
  
  }))
