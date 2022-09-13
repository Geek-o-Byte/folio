import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Max Miriko — personal page</title>
        <meta name="description" content="Max Miriko — personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar></Navbar>
        <Section name="achievments">
          <hr />
        </Section>
        <Section name="projects">
          <hr />
        </Section>

      </main>
    </div>
  )
}

export default Home
