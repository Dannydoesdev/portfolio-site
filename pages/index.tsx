import { Space } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImage } from '../components/Hero/Hero';
import { ProjectCard } from '../components/ProjectCard/Card';
// import { props } from '../components/Card/CardData';
import ProjectGrid from '../components/ProjectGrid/Grid';
import { AboutMe } from '../components/AboutMe/AboutMe';
import attributes from '../components/AboutMe/attributes.json'
import { SwitchToggle } from '../components/ColorSchemeToggleNew/SchemeToggle';
import { TechStackIcons } from '../components/TechStackGrid/StrackGridIcons';

export default function HomePage() {
  const { props } = attributes
  
  return (
    <>
      <HeroImage />

      {/* <ColorSchemeToggle /> */}
      <SwitchToggle />
      <Space h='sm' />
      <AboutMe {...props} />
      <Space h={80} />
      <TechStackIcons />
      {/* <Space h='xl' /> */}
      <Space h={100} />
      <ProjectGrid />
    </>
  );
}
