import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  button {
    background: ${colors.black};
    border: 0;
    color: ${colors.white};
    border-radius: 50rem;
    font-size: 1.6rem;
    font-weight: 800;
    padding: 1rem 2.4rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  button:hover {
    opacity: 0.8;
  }
`;
