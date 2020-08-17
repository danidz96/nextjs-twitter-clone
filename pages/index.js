import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="title">Devter</h1>
        <nav>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </nav>
        <nav />
      </main>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title {
            color: #0070f3;
            text-decoration: none;
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
