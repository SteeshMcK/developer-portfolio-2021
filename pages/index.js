import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stesha McKindle | Web Creations</title>
      </Head>

      <main className={styles.main}>
        <div className='headshot'>
          <Image src='/headshot.jpg' width={500} height={500} alt='my headshot' />
        </div>
        <div className={ styles.personalInfo }>
          <p>email: steshamckindle@gmail.com</p>
          <p>phone: 503-840-9044</p>
        </div>
        <div className='projects'>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
