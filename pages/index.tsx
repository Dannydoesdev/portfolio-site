import { Space } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImage } from '../components/Hero/Hero';
import { ProjectCard } from '../components/Card/Card';
// import { props } from '../components/Card/CardData';
import ProjectGrid from '../components/Grid/Grid';

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <ColorSchemeToggle />
      <Space h='lg'/>
      <ProjectGrid />
    </>
  );
}
