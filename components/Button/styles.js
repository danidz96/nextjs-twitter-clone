import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  button {
    display: flex;
    align-items: center;
    background: ${colors.black};
    border: 0;
    color: ${colors.white};
    border-radius: 50rem;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 2.4rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
    user-select: none;
  }

  button[disabled] {
    pointer-events: none;
    opacity: 0.3;
  }

  button > :global(svg) {
    margin-right: 0.8rem;
  }

  button:hover {
    opacity: 0.8;
  }
`;
