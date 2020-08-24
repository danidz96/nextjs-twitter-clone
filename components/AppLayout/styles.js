import css from 'styled-jsx/css';
import { breakpoints, fonts, colors } from '../../styles/theme';
import { addOpacityToColor } from '../../styles/utils';

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};

    background-image: radial-gradient(${backgroundColor} 1px, ${colors.lightGray} 1px),
      radial-gradient(${backgroundColor} 1px, ${colors.lightGray} 1px);
    background-position: 0 0, 25px, 25px;
    background-size: 50px 50px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default css`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  main {
    background: #fff;
    border-radius: 0.8rem;
    box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.08);
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      max-height: 90rem;
      width: 50rem;
    }
  }
`;
