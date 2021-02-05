import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stesha McKindle | Web Creations</title>
      </Head>

      <main className={styles.main}>
        <h1>Stesha's new portfolio</h1>
      </main>
    </div>
  )
}
