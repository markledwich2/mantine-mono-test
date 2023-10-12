import {Card, MantineContext, useMantineTheme} from '@mantine/core'
import React, {useEffect} from 'react'
import {useContext} from 'react'

export const ThemeTestContext = React.createContext('test');

export const ThemeTest = () => {
  const ctx = useContext(MantineContext)
  useEffect(() => {
    console.debug('shared ctx', {version:React.version, ctx})
  }, [ctx]);
  return <div>Shared Mantine Context {ctx ? 'Exists' : 'Missing'}</div>
}

