import { Space } from '@mantine/core';
import { HeroImage } from '../components/Hero/Hero';
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

      <SwitchToggle />
      <Space h='sm' />
      <AboutMe {...props} />
      <Space h={80} />
      <TechStackIcons />
      <Space h={100} />
      <ProjectGrid />
    </>
  );
}
