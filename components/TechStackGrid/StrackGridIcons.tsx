// import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import { Image, createStyles, Group, Stack, Title, Space } from '@mantine/core';
import { ComplexGrid } from './ComplexGrid';
import useStyles from './StackGridIcons.styles';

export function TechStackIcons() {

  const { classes, theme } = useStyles()

  return (
    <>
      {/* <Stack align='center' sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? '#36005d' : '#eee9ff', padding: '25px' })}> */}
      <Stack align='center' sx={(theme) => ({  padding: '25px' })}>
      
        {/* <Title className={classes.title}>Stack</Title> */}
        <Group align='center' noWrap={true} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? '#36005d87' : theme.colors.violet[0], paddingRight: '25px', paddingLeft: '25px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '8px' })}>
          <Title className={classes.highlight}>Tech</Title>
          <Image
            // width={200}
            height={40}
            fit="contain"
            src={theme.colorScheme === 'dark' ? "https://skillicons.dev/icons?i=svelte,tensorflow,apollo,c,kotlin&perline=5&theme=light" : "https://skillicons.dev/icons?i=svelte,tensorflow,apollo,c,kotlin&perline=5&theme=dark"}
          />
        </Group>
        {/* <Space h={40} /> */}
        {/* <Image
          // width={200}
          height={140}
          fit="contain"
          src={theme.colorScheme === 'dark' ? "https://skillicons.dev/icons?i=react,ts,py,express,nodejs,nextjs,html,css,js,firebase,vercel,mongodb,mysql,figma&perline=7&theme=light" : "https://skillicons.dev/icons?i=react,ts,py,express,nodejs,nextjs,html,css,js,firebase,vercel,mongodb,mysql,figma&perline=7&theme=dark"}
        /> */}
      </Stack>
     <Space h={30} />
      <ComplexGrid />
      
    </>


  );
};