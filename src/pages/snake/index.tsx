import React, { useState } from 'react';

import Speaker from '../../components/snake/Speaker'
import Game from '../../components/snake/Game'
import Styled from './Styled';

const Snake = () => {

    const [mute, setMute] = useState(localStorage.getItem('MUTE') !== null);

    const handleMute = (mute: boolean) => {
        console.log('mute', mute);
        
        if (mute) {
          localStorage.setItem('MUTE', 'true');
        } else {
          localStorage.removeItem('MUTE');
        }
        setMute(mute);
    };

    return (
        <Styled>

            <Speaker onClick={handleMute} mute={mute} />

            <Game mute={mute} />

        </Styled>
    )
}

export default Snake;