import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import styles from './styles';
import useTimeAgo from '../../hooks/useTimeAgo';

export default function Devit({ avatar, userName, content, createdAt, img, id }) {
  const timeago = useTimeAgo(createdAt);
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <strong>{userName}</strong>
          <span> · </span>
          <span className="date">{timeago}</span>
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
