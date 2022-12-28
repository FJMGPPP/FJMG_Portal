import Head from 'next/head'
import Header from '@components/SimpleHeader'
import Footer from '@components/Footer'
import NoticesMain from '@components/NoticesMain'
import {Group, useMantineTheme } from '@mantine/core'

export default function Home() {
  const theme = useMantineTheme();
  return(
    <Group direction="column" mt="-20px">
      <Group style={{backgroundColor: theme.colors.gray[0], width:"80%", marginTop : "4.6vh" , height:"100vh"}} mx="auto" direction="column">
        <NoticesMain/>
      </Group>
    </Group>
  )
}
