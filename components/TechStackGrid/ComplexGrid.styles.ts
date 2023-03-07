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
    // backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '',
    borderRadius: 8,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.pink[6] : '',
    // backgroundColor: theme.colorScheme === 'dark' ? '#fffffff9' : '',
    
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : '',
    
    // MOST RECENT:
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.indigo[0],

    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.cyan[6] : '', 

    [theme.fn.smallerThan('md')]: {
      width: '55%',
      marginBottom: '15px',
      paddingBottom: '5px',
           // alignItems: 'center',
      // justifyContent: 'center',
    },
  },

  heading: {
    // backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '',
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

    // color: 'black',
    // objectFit: 'contain',
    // backgroundImage: 'contain',
  },

    // title: {
    //   fontSize: '35px',
    //   textAlign: 'center',
    //   // textTransform: 'uppercase',
    //   // fontWeight: 800,
    //   // fontSize: theme.fontSizes.xl,
    //   color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
    //   // color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    //   letterSpacing: 0.5,
  
    //   backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff',
    //   padding: 40,
    //   paddingTop: 0,
    //   paddingBottom: 5,
    //   borderRadius: theme.radius.sm,
    //   display: 'inline-block',
  
    //   [theme.fn.smallerThan('sm')]: {
  
    //     fontSize: '30px',
    //     //   marginLeft: '-5px',
  
    //   },
  
  
    // },
    //

  }))
