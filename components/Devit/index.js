import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import styles from './styles';

export default function Devit({ avatar, username, message, id }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}

Devit.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
