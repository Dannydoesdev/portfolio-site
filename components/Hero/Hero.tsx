import { Container, Title, Text, Button } from '@mantine/core';
import useStyles from './Hero.styles';
import Link from 'next/link';

export function HeroImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Hi, I'm{' '}
              <Text
                component="span"
                inherit              
                variant="gradient"
                gradient={{ from: '#460376 0%', to: '#8700edf7 100%' }}
                className={classes.name}

              >
                Danny
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              A versatile Product Development expert with more than 15 years of experience across the product & tech industry. I like to build products that look delight users and look great.
            
            </Text>
            <Link 
              href="https://linktr.ee/danieltmcgee" 
              target='_blank' 
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="gradient"
                gradient={{ from: '#36005dfc 0%', to: '#8700edba 100%' }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Connect with me
              </Button>
            </Link>

          </div>
        </div>
      </Container>
    </div>
  );
}
