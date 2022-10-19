import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, Space } from '@mantine/core';
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
      <ThemeIcon variant="light" className={classes.itemIcon} size={95} radius="lg">
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

      <Container size={900} p={0} mb={30}>
        <Text color="dimmed" className={classes.description}>
          {/* {description} */}
          <Space h='xs' />
          An IT Consultant in the Berlin Startup scene, Network Manager in the public service, a UX Designer in a not-for-profit, and Product Manager in a disability sector scale-up;
          <Space h='xs' />
          Studying and honing his skills across the spectrum of technical affluency and product development - his transferable experience spans a diverse range of stages and cultures.
          <Space h='xs' />
          ...He also rarely speaks in third person (promise).
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


// old text
//  he's worked as a Product Manager, a UX Designer as well as a system administrator.  He also rarely speaks in third person (promise).