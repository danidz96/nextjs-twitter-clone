import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Devter</h1>
        <nav>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </nav>
        <nav />
      </main>
    </div>
  );
}
