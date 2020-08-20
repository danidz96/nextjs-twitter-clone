import { useState, useEffect } from 'react';
import Head from 'next/head';
import { colors } from '../styles/theme';
import Button from '../components/Button';
import { loginWithGitHub, onAuthStateChanged } from '../firebase/firebase';
import Avatar from '../components/Avatar';

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then((appUser) => {
        setUser(appUser);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <img src="/devter-logo.png" alt="Devter Logo" />
        <h1>Devter</h1>
        <h2>
          Talk about developent with developers
          <span aria-label="tech emojis" role="img">
            👩‍💻👨‍💻
          </span>
        </h2>
        {user === null && (
          <div>
            <Button onClick={handleClick}>Login with GitHub</Button>
          </div>
        )}
        {user?.avatar && (
          <div>
            <Avatar alt={user.username} src={user.avatar} text={user.username} withText />
          </div>
        )}
      </section>

      <style jsx>
        {`
          img {
            width: 12rem;
          }
          h1 {
            font-size: 2.4rem;
            color: ${colors.primary};
          }
          h2 {
            font-size: 1.6rem;
            color: ${colors.secondary};
          }

          section {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
