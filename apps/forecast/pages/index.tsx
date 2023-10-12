import { Button, Flex, Group, MantineContext } from "@mantine/core";
import { useContext } from "react";
import { ThemeTest } from "shared";
export default function IndexPage() {
  const ctx = useContext(MantineContext);
  return (
    <Group justify="center">
      <Flex direction={"column"}>
        <Group mt={50}>App Mantine Context: {ctx ? "Exists" : "Missing"}</Group>
        <Group mt={50}>
          <ThemeTest />
        </Group>
      </Flex>
    </Group>
  );
}
