import { useState, useEffect } from 'react';
import styles from './styles';
import Devit from '../../components/Devit';
import useUser from '../../hooks/useUser';

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user &&
      fetch('/api/statuses/home_timeline')
        .then((response) => response.json())
        .then(setTimeline);
  }, [user]);

  return (
    <div>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map((devit) => (
          <Devit
            key={devit.id}
            id={devit.id}
            avatar={devit.avatar}
            message={devit.message}
            username={devit.username}
          />
        ))}
      </section>
      <nav />
      <style jsx>{styles}</style>
    </div>
  );
}
