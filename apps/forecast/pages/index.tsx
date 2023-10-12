import { Button, Group, MantineContext } from "@mantine/core";
import { useContext } from "react";
import { ThemeTest } from "shared";
export default function IndexPage() {
  const ctx = useContext(MantineContext)
  return (
    <Group justify="center">
      <Group mt={50} bg="blue">
        App Mantine Context: {ctx ? 'Exists' : 'Missing'}
      </Group>
      <Group mt={50} bg="red">
        <ThemeTest />
      </Group>
    </Group>
  );
}
