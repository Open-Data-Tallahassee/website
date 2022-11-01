import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Tallahassee</title>
        <meta name="description" content="keeping you posted on local news and stories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         🔍 Open Tallahassee
        </h1>

        <p className={styles.description}>
          Reminders:
          <br/>
          Early Voting ends on November 6th <br/>
          Election Day is on November 8th
        </p>

        <div className={styles.grid}>
          <Link href="https://docs.google.com/document/d/1gXmyCiMrkh8RIKUq_HPk2Xrvx-KBjl6OWNM32kv_U-I/edit?usp=sharing" className={styles.card}>
            <h2>Find out where you can vote &rarr;</h2>
          </Link>

          <Link href="https://www.leonvotes.gov/YourVoterinfo" className={styles.card}>
            <h2>Look-up who/what you're voting for &rarr;</h2>
          </Link>

          <Link
            href="https://instagram.com/opentlh"
            className={styles.card}
          >
            <h2>Check out FAMU's & FSU's voter turnout results &rarr;</h2>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
          <div>Open Tallahassee (an up-and-coming digital publication, focused on local news and stories)</div>
      </footer>
    </div>
  )
}
