import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import IMAGES from './images';
import useStyles from './AboutMe.styles';

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode;
  description: React.ReactNode;
  data: FeatureImage[];
}

export function AboutMe({ supTitle, description, data }: FeaturesImagesProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={1000} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>

      <Title className={classes.title} order={2}>
        Danny is not <span className={classes.highlight}>just</span> a dev
      </Title>

      <Container size={850} p={0} mb={50}>
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={80}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
