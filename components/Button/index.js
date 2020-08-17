import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import GitHub from '../Icons/GitHub';

export default function Button({ children, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        <GitHub fill="#fff" width="24" height="24" />
        {children}
      </button>

      <style jsx>{styles}</style>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
