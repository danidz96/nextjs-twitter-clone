import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './styles';
import Devit from '../../components/Devit';
import useUser from '../../hooks/useUser';
import { fetchLatestDevits } from '../../firebase/firebase';
import Create from '../../components/Icons/Create';
import Home from '../../components/Icons/Home';
import Search from '../../components/Icons/Search';

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline);
  }, [user]);

  return (
    <>
      <Head>
        <title>Inicio / Devter</title>
      </Head>
      <header>
        <h2>Home</h2>
      </header>
      <section>
        {timeline.map(({ id, userId, avatar, img, content, userName, createdAt }) => (
          <Devit
            key={id}
            id={id}
            avatar={avatar}
            img={img}
            content={content}
            userName={userName}
            userId={userId}
            createdAt={createdAt}
          />
        ))}
      </section>
      <nav>
        <Link href="/home">
          <a>
            <Home width={32} height={32} stroke="#0099ff" />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <Search width={32} height={32} stroke="#0099ff" />
          </a>
        </Link>
        <Link href="/compose/tweet">
          <a>
            <Create width={32} height={32} stroke="#0099ff" />
          </a>
        </Link>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
}
