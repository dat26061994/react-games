import styled from 'styled-components';

export const MillionaireWrapper = styled.div`
    background: url('/images/millionaire/bg.jpg');
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .logo {
        padding-top: 30px;
        img {
            margin: auto;
            width: 200px;
        }
    }

    .game-container {
        width: 800px;
        height: 600px;
        margin: auto;
    }
`