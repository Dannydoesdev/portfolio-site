// import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import { Image, createStyles, Group, Stack, Title, Space } from '@mantine/core';

// function Demo() {
//   return (
//     <>
//       {/* By default image will have object-fit: cover */}
//       <Image
//         width={200}
//         height={80}
//         src="https://images.unsplash.com/long-image-url-was-here.jpg"
//       />

//       {/* Set fit="contain" to preserve image proportions in this case image wrapper will still have given width and height */}
//       <Image
//         width={200}
//         height={80}
//         fit="contain"
//         src="https://images.unsplash.com/long-image-url-was-here.jpg"
//       />

//       {/* It's not necessary to use both width and height */}
//       <Image
//         height={80}
//         src="https://images.unsplash.com/long-image-url-was-here.jpg"
//       />
//     </>
//   );
// }

const useStyles = createStyles((theme) => ({

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

export function TechStackIcons() {

  const { classes, theme } = useStyles()

  return (
    <>
      {/* <Stack align='center' sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff', padding: '25px' })}> */}
      <Stack align='center' sx={(theme) => ({  padding: '25px' })}>
      
        {/* <Title className={classes.title}>Stack</Title> */}
        <Group align='center' noWrap={true} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? '#36005d87' : theme.colors.violet[0], paddingRight: '25px', paddingLeft: '25px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '5px' })}>
          <Title className={classes.highlight}>Tech</Title>
          <Image
            // width={200}
            height={50}
            fit="contain"
            src={theme.colorScheme === 'dark' ? "https://skillicons.dev/icons?i=svelte,tensorflow,apollo,c,kotlin&perline=5&theme=light" : "https://skillicons.dev/icons?i=svelte,tensorflow,apollo,c,kotlin&perline=5&theme=dark"}
          />
        </Group>
        <Space h={40} />
        <Image
          // width={200}
          height={140}
          fit="contain"
          src={theme.colorScheme === 'dark' ? "https://skillicons.dev/icons?i=react,ts,py,express,nodejs,nextjs,html,css,js,firebase,vercel,mongodb,mysql,figma&perline=7&theme=light" : "https://skillicons.dev/icons?i=react,ts,py,express,nodejs,nextjs,html,css,js,firebase,vercel,mongodb,mysql,figma&perline=7&theme=dark"}
        />
      </Stack>
    </>
  );
}