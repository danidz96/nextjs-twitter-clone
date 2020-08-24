import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import styles from './styles';

export default function Devit({ avatar, userName, content, createdAt, id }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <strong>{userName}</strong>
          <date>{createdAt}</date>
          <p>{content}</p>
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
  createdAt: PropTypes.string,
  id: PropTypes.string.isRequired,
};
