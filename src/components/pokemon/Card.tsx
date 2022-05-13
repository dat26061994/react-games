import React from 'react';
import { CardWrapper } from './StyledCard'

const Card = (props: any) => {

    const handleChoice = () => {
        if (!props.disabled) {
            props.handleChoice(props.card);
        }
    }

    return (
        <CardWrapper>
            <div className={props.flipped ? "flipped" : ""}>
                <img  className={`front ${props.card.matched ? "matched" : ''}`} src={props.card.src} alt="card front" />
                <img className='back' src="/images/card_back.png" alt="card back" onClick={() => handleChoice()} />
            </div>
        </CardWrapper>
    );

}

export default Card;