// https://ui.mantine.dev/component/lead-grid

import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, Title, Text, Image, Group, Stack, Space } from '@mantine/core';
import useStyles from './ComplexGrid.styles';

// const PRIMARY_COL_HEIGHT = 300;

export function ComplexGrid() {
  // const theme = useMantineTheme();
  // const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  const { classes, theme } = useStyles()

  return (
    <Container my="md">
      <SimpleGrid cols={3} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {/* <Stack align='center'> */}
        <Stack className={classes.stack}>
          <Title align='center' order={2} className={classes.highlight}>
            Front-end
          </Title>
           {/* <Space h='sm' /> */}
          {/* <SimpleGrid cols={2} p={3} className={classes.container} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}> */}
           
          <Stack spacing={0} p={3} className={classes.container}>
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg'
                />
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg'
                />
              {/* </Stack>
            <Stack spacing={0}> */}
                <Image
                  height={65}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg'
                />
                <Image
                  height={60}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg'
                  // className={classes.img}
                />
                {/* <Image
                  height={70}
                  fit="contain"
                  
                  src='https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg'
                /> */}
            </Stack>
            {/* https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg */}
         
          {/* </SimpleGrid> */}
        </Stack>
        <Stack className={classes.stack}>
          <Title align='center' order={2} className={classes.highlight}>
            Back-End
          </Title>
          {/* <Space h='sm' /> */}
              <Stack spacing={0} p={3} className={classes.container}>
                <Image
                  height={60}
                  fit="contain"
                  src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
                />
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg'
                  // className={classes.img}
                />
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg'
            />
              <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/python/python-ar21.svg'
                />
          </Stack>
          
        </Stack>
        {/* https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg */}
        {/* https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg */}
        <Stack className={classes.stack}>
          <Title align='center' order={2} className={classes.highlight}>
            Database/Cloud
          </Title>
          {/* <Space h='sm' /> */}
              <Stack spacing={0} p={3} className={classes.container}>
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg'
                />
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg'
                  // className={classes.img}
            />
             {/* <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg'
                  // className={classes.img}
            />
             */}
            
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg'
                />
              </Stack>
            </Stack>
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        {/* <Grid gutter="md">
          <Grid.Col>
            <div>
              <Title align='center' order={2}>Database/Cloud</Title>
              <Group>
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg'
                />
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg'
                />
                <Image
                  height={70}
                  fit="contain"
                  src='https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg'
                />
              </Group>
            </div>
          </Grid.Col>
  */}
        {/* </Grid> */}
      </SimpleGrid>
    </Container>
  );
}