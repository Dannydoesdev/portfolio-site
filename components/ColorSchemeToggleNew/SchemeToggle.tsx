import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
// import { createStyles, Selectors } from '@mantine/core';

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();


  return (
    <Group position="center" my={30}>
      <Switch
        color={'violet.9'}
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.violet[6]} size={20} stroke={1.5} />}
      />
    </Group>
  );
}