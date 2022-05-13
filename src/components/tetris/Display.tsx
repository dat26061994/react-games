import React from 'react';
import { StyledDisplayWrapper } from './StyledDisplay';

const Display = (props: any) => {
    const { gameOver, text } = props;
    
    return (
        <StyledDisplayWrapper gameOver={gameOver}>{text}</StyledDisplayWrapper>
    );
}

export default Display;