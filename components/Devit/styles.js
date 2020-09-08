import css from 'styled-jsx/css';

export default css`
  article {
    padding: 1rem 1.5rem;
    display: flex;
    border-bottom: 2px solid #eaf7ff;
  }

  div {
    padding-right: 1rem;
  }

  img {
    margin-top: 1rem;
    border-radius: 1rem;
    height: auto;
    width: 100%;
  }

  time {
    color: #555;
    font-size: 1.4rem;
    text-decoration: none;
  }

  time:hover {
    text-decoration: underline;
  }

  p {
    margin: 0;
  }
`;
