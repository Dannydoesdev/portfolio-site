import { Avatar, Switch, Card, Image, Text, Title, SimpleGrid, Badge, Button, Group, Space, Stack } from '@mantine/core';
import { cards } from '../ProjectCard/CardData.js'
import { ProjectCard } from '../ProjectCard/Card';
import useStyles from './Grid.styles';
import TextHighlight from './Highlight';

const ProjectGrid = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <Space h={50} />
      <Title size={50} className={classes.title} align='center'><span className={classes.highlight}> Projects </span> </Title>
      {/* <Space h={50} /> */}
      {/* <TextHighlight /> */}
      <Space h={50} />
      <Group p='xl' mx="md">
        <SimpleGrid cols={1} spacing="xl" breakpoints={[
          { maxWidth: 980, cols: 1, spacing: 'md' },
          { maxWidth: 755, cols: 1, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
          {cards.map((card, index) => {
            return <ProjectCard key={index} {...card} />
          })}
        </SimpleGrid>
      </Group>
    </>
  )

}


export default ProjectGrid