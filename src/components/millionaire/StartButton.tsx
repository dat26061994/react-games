import { StartButtonWrapper } from './StyledStartButton';

const StartButton = ({ onClick, text }: any) => {

    return (
        <StartButtonWrapper onClick={onClick}>
            { text }
        </StartButtonWrapper>
    );
}

StartButton.defaultProps = {
    onClick: () => {},
    text: 'Start Game',
}

export default StartButton;