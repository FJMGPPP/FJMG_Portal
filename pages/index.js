import Head from 'next/head'
import Header from '@components/SimpleHeader'
import Footer from '@components/SimpleFooter'
import NoticesMain from '@components/NoticesMain'
import {Group, useMantineTheme } from '@mantine/core'

export default function Home() {
  const theme = useMantineTheme();
  return(
        <NoticesMain/>
  )
}
