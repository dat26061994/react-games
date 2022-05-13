import React from 'react';
import { StyledStartButton } from './StyledStartButton'

const StartButton = (props: any) => {
    const { callback, text } = props;
    
    return (
        <StyledStartButton onClick={callback}>{text}</StyledStartButton>
    );
}

export default StartButton;