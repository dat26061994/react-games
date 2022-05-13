import { StartButtonWrapper } from './StyledStartButton';

const StartButton = ({ onClick }: any) => {

    return (
        <StartButtonWrapper onClick={onClick}>
            Start Game
        </StartButtonWrapper>
    );
}

StartButton.defaultProps = {
    onClick: () => {}
}

export default StartButton;