import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Avatar({ alt = 'avatar image', src, text }) {
  return (
    <div>
      <img src={src} alt={alt} title={alt} />
      {text && <strong>{text}</strong>}
      <style jsx>{styles}</style>
    </div>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
};
