import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Avatar from '../Avatar';
import styles from './styles';
import useTimeAgo from '../../hooks/useTimeAgo';

export default function Devit({ avatar, userName, content, createdAt, img, id }) {
  const timeago = useTimeAgo(createdAt);
  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push('/status/[id]', `/status/${id}`);
  };
  return (
    <>
      <article onClick={handleArticleClick}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <strong>{userName}</strong>
          <span> · </span>
          <Link href="/status/[id]" as={`/status/${id}`}>
            <a>
              <time className="date">{timeago}</time>
            </a>
          </Link>
          <p>{content}</p>
          {img && <img alt={img} src={img} />}
        </section>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}

Devit.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number,
  img: PropTypes.string,
  id: PropTypes.string.isRequired,
};
