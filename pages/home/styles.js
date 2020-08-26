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

  section {
    flex: 1;
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
    display: flex;
  }

  nav a {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    justify-content: center;
  }
  nav a:hover {
    background: radial-gradient(#0099ff22 15%, transparent 16%);
    background-size: 180px 180px;
    background-position: center;
  }
`;
