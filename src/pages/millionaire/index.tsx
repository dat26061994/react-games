import { useState } from 'react';
import { MillionaireWrapper } from './Styled';
import StartButton from '../../components/millionaire/StartButton'
import Game from '../../components/millionaire/Game'

const Millionaire = () => {

    const [isStart, setIsStart] = useState<boolean>(false);

    const onStartGame = () => {
        setIsStart(true);
    }

    const onShowBestScrore = () => {}

    const onShowHelp = () => {}

    return(
        <MillionaireWrapper>
            <div className="logo">
                <img src="/images/millionaire/logo.png" alt="Logo" />

                <div className="game-container">

                    { isStart ? <Game /> : 
                        <div>
                            <div className="my-3">
                                <StartButton onClick={onStartGame} text="Start Game" />
                            </div>

                            <div className="my-3">
                                <StartButton onClick={onShowBestScrore} text="Best Score" />
                            </div>

                            <div className="my-3">
                                <StartButton onClick={onShowHelp} text="Helps" />
                            </div>

                        </div>
                    }
                    
                </div>

            </div>
        </MillionaireWrapper>
    );
}

export default Millionaire;