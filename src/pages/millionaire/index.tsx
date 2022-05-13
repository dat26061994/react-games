import { useState } from 'react';
import { MillionaireWrapper } from './Styled';
import StartButton from '../../components/millionaire/StartButton'
import Game from '../../components/millionaire/Game'

const Millionaire = () => {

    const [isStart, setIsStart] = useState<boolean>(false);

    const onStartGame = () => {
        setIsStart(true);
    }

    return(
        <MillionaireWrapper>
            <div className="logo">
                <img src="/images/millionaire/logo.png" alt="Logo" />

                <div className="game-container">

                    { isStart ? <Game /> : <StartButton onClick={onStartGame} /> }
                    
                </div>

            </div>
        </MillionaireWrapper>
    );
}

export default Millionaire;