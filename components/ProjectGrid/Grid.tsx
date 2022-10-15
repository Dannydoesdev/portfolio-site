import { Avatar, Switch, Card, Image, Text, Title, SimpleGrid, Badge, Button, Group, Space, Stack } from '@mantine/core';
import { cards } from '../ProjectCard/CardData.js'
import { ProjectCard } from '../ProjectCard/Card';
import useStyles from './Grid.styles';

const ProjectGrid = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <Title order={1} weight='bolder' className={classes.title} align='center'>Projects</Title>
      <Space h='xl' />
      <Group mx="md">
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