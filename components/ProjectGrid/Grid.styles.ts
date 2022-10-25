import { BackgroundImage, createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    // color: theme.colorScheme === 'dark' ? 'white' : 'black',
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },

  container: {
    maxWidth: 1000,
    margin: 'auto',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  highlight: {
   
    // TO TRY - FULL WIDTH Background
    // background-color: #36005d69;
    // padding: 700px;
    // padding-top: 15px;
    // padding-bottom: 15px;


    backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff',
    padding: 40,
    paddingTop: 0,
    paddingBottom: 5,
    borderRadius: theme.radius.md,
    display: 'inline-block',

    // textShadow: 'purple -5px 4px 5px',
    // boxShadow: theme.colorScheme === 'dark' ? '-16px 15px 10px 0px #4b0b69ed' : '-12px 11px 5px 1px #954ff759',
    
    // test dark
    // '-16px 15px 10px 0px #4b0b69ed'
    // '-12px 8px 13px 5px #400d5f'
    
    // old
    //'-18px 15px 14px 1px #8f55ff9e',
    // -8px 7px 9px 1px #5300f363
    // '-12px 8px 13px 5px purple',
    // fontWeight: 600,
    // color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },

}));