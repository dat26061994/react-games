import styled from 'styled-components';

export const CardWrapper = styled.div`
    position: relative;
    cursor: pointer;
    
    .front{
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 2px solid black;
        position: absolute;
        transform: rotateY(90deg);
        transition: all ease-in 0.2s;
    }
    
    .front.matched{
        background-color:  #70ff6b;
    }
    
    .flipped .front {
        transform: rotateY(0deg);
        transition-delay: 0.2s;
    }
    
    .back{
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 2px solid white;
        transition: all ease-in 0.2s;
        transition-delay: 0.2s;
    }
    
    .flipped .back {
        transform: rotateY(90deg);
        transition-delay: 0s;
    }
`