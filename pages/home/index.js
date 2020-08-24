import { useState, useEffect } from 'react';
import styles from './styles';
import Devit from '../../components/Devit';

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then((response) => response.json())
      .then(setTimeline);
  }, []);

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
      <nav>nav</nav>
      <style jsx>{styles}</style>
    </div>
  );
}
