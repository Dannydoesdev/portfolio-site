import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import useStyles from './Card.styles';
import Link from 'next/link';


export function ProjectCard({
  image,
  title,
  description,
  type,
  githubLink,
  typeStyle,
  badges,
  internalLink,
  link,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Link href={internalLink} passHref>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>
      </Link>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge className={typeStyle ? classes.badgeSolo : ''} size="sm">
            {type}
          </Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Languages used
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Link href={githubLink} passHref target="_blank">
          <Button radius="md" className={classes.button} style={{ flex: 1 }}>
            On Github
          </Button>
        </Link>

        <Link href={link} target="_blank" passHref>
          <Button
            radius="md"
            className={classes.button}
            style={{ flex: 1 }}
          >
            Live site
          </Button>
        </Link>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size={18} className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}

interface BadgeCardProps {
  image: string;
  title: string;
  link: string;
  githubLink: string;
  internalLink: string;
  type: string;
  typeStyle: boolean; // boolean to apply the 'team' style vs 'solo' style to label
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}
