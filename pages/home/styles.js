import css from 'styled-jsx/css';

export default css`
  header {
    height: 4.9rem;
    position: sticky;
    border-bottom: 1px solid #ccc;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #ffffffaa;
    backdrop-filter: blur(5px);
  }

  h2 {
    font-weight: 800;
    font-size: 2.2rem;
    padding-left: 1.5rem;
  }

  nav {
    position: sticky;
    bottom: 0;
    border-top: 1px solid #ccc;
    background: #fff;
    height: 4.9rem;
    width: 100%;
  }
`;
