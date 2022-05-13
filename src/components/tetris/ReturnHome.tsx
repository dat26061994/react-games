import React from 'react';
import { StyledStartButton } from './StyledStartButton'
import { useNavigate } from 'react-router-dom';

const StartButton = (props: any) => {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    }
    
    return (
        <StyledStartButton onClick={returnHome}>Home</StyledStartButton>
    );
}

export default StartButton;