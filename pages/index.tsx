import { Space } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImage } from '../components/Hero/Hero';
import { ProjectCard } from '../components/ProjectCard/Card';
// import { props } from '../components/Card/CardData';
import ProjectGrid from '../components/ProjectGrid/Grid';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { props } from '../components/AboutMe/attributes.json'

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <ColorSchemeToggle />
      <Space h='xl' />
      <AboutMe {...props} />
      <Space h='xl' />
      <ProjectGrid />
    </>
  );
}
