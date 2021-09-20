import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box} from "@chakra-ui/react";
import {RequestSample} from "../components/RequestSample";

const Home: NextPage = () => {
  return (
    <Box>
      <RequestSample />
    </Box>
  )
}

export default Home
