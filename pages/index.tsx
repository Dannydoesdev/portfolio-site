import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImage } from '../components/Hero/Hero';

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
