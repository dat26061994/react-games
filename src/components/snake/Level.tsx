import React from 'react';
import { GameLevel } from '../../interface/snake/ISnake';
import StyledLevel from './StyledLevel';

interface LevelProps {
  onClick: (level: GameLevel) => void;
}

const Level = ({ onClick }: LevelProps) => {
  return (
    <StyledLevel>
      {Object.values(GameLevel).map((level) => (
        <p key={level} onClick={() => onClick(level)}>
          {level}
        </p>
      ))}
    </StyledLevel>
  );
};

Level.defaultProps = {
  onClick: () => {},
};
export default Level;
