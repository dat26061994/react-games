
import styled from 'styled-components';

export const StyledSpeaker = styled.div`
    cursor: pointer;
    user-select: none;
    opacity: 0.5;
    transition: opacity 0.1s linear;
    width: 38px;
    height: 38px;

    :hover {
        opacity: 1;
    }
    path {
        display: ${({ $mute }) => ($mute ? 'none' : '')};
    }
`