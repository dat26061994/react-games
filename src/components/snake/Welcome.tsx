import React from 'react';
import Level from '../../components/snake/Level';
import StyledWelcome from './StyledWellcome';
import { GameLevel } from '../../interface/snake/ISnake';

interface WelcomeProps {
  onClick: (level: GameLevel) => void;
}

const Welcome = ({ onClick }: WelcomeProps) => {
  return (
    <StyledWelcome>
      <h1>Snake</h1>
      <p>Choose level:</p>
      <Level onClick={onClick} />
    </StyledWelcome>
  );
};

Welcome.defaultProps = {
  onClick: () => {},
};
export default Welcome;