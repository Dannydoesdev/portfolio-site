import { Container, Title, Text, Button } from '@mantine/core';
import useStyles from './Hero.styles';

export function HeroImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#6103a5fc 0%', to: '#dbbaf4 100%' }}
                // linear-gradient(45deg, #6cd3e1 0%, #ddffb9 100%) // original
                // linear-gradient(45deg, #ff0000fc 0%, #ffffff 100%) // red
                // gradient={{ from: '#6cd3e1', to: '#ddffb9' }} // blue
                // linear-gradient(45deg, #6103a5fc 0% 0%, #dbbaf4 100% 100%) // purple
              >
                Daniel McGee's
              </Text>{' '}
              Portfolio
            </Title>

            <Text className={classes.description} mt={30}>
            A versatile IT expert with more than a decade of experience in the industry, and a
            tenacity for impact-driven initiatives, roles & organisations.
            </Text>

            <Button
              variant="gradient"
              // gradient={{ from: 'pink', to: 'yellow' }} // original
              // gradient={{ from: '#6103a5fc 0%', to: '#dbbaf4 100%' }} // copy from above
              gradient={{ from: '#36005dfc 0%', to: '#8700edba 100%' }} 
              // linear-gradient(45deg, #36005dfc 0% 0%, #8700edba 100% 100%)
              size="xl"
              className={classes.control}
              mt={40}
            >
              Connect with me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}