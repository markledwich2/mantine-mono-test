import { Button, Flex, Group, MantineContext } from "@mantine/core";
import React from "react";
import { useContext, useEffect } from "react";
import { ThemeTest } from "shared";
export default function IndexPage() {
  const ctx = useContext(MantineContext);
  return (
    <MantineContext.Provider value={ctx}>
      <Group justify="center">
        <Flex direction={"column"} gap={"lg"}>
          <Group>
            App Mantine Context: {ctx ? "Exists" : "Missing"}
          </Group>
          <Group>
            <ThemeTestApp />
          </Group>
          <Group>
            <ThemeTest />
          </Group>
        </Flex>
      </Group>
    </MantineContext.Provider>
  );
}


export const ThemeTestApp = () => {
  const ctx = useContext(MantineContext)
  useEffect(() => {
    console.debug('app ctx', {version:React.version, ctx})
  }, [ctx]);
  return <div>App Component Mantine Context {ctx ? 'Exists' : 'Missing'}</div>
}
