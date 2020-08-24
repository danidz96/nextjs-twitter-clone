import { useState, useEffect } from 'react';
import styles from './styles';
import Devit from '../../components/Devit';
import useUser from '../../hooks/useUser';
import { fetchLatestDevits } from '../../firebase/firebase';

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline);
  }, [user]);

  return (
    <div>
      <header>
        <h2>Home</h2>
      </header>
      <section>
        {timeline.map(({ id, userId, avatar, content, userName, createdAt }) => (
          <Devit
            key={id}
            id={id}
            avatar={avatar}
            content={content}
            userName={userName}
            userId={userId}
            createdAt={createdAt}
          />
        ))}
      </section>
      <nav />
      <style jsx>{styles}</style>
    </div>
  );
}
