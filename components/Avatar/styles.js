import css from 'styled-jsx/css';

export default css`
  div {
    display: flex;
    align-items: center;
  }

  img {
    border-radius: 999rem;
    height: 4.9rem;
    width: 4.9rem;
  }

  img + strong {
    margin-left: 0.8rem;
  }
`;
