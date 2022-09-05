import { Avatar, Switch, Card, Image, Text, Title, SimpleGrid, Badge, Button, Group, Space, Stack } from '@mantine/core';
import { cards } from '../Card/CardData.js'
import { ProjectCard } from '../Card/Card';

const ProjectGrid = () => {

  return (
    <>
      <Title order={1} weight='bolder' color="white" align='center'>Projects</Title>
      <Space h='xl' />
      <Group mx="md">
        <SimpleGrid cols={2} spacing="xl" breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
          {cards.map((card) => {
            return <ProjectCard {...card} />
          })}
        </SimpleGrid>
      </Group>
    </>
  )

}


export default ProjectGrid