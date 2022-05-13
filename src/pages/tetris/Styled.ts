import styled from 'styled-components';

export const TetrisWrapper = styled.div`
    // width: 100vw;
    height: 100%;
    background: url('/images/bg.png') #000;
    background-size: cover;
    overflow: hidden;

    .tetris-container {
        display: flex;
        align-items: flex-start;
        padding: 40px;
        margin: 0 auto;
        max-width: 900px;

        aside {
            width: 100%;
            height: 200px;
            display: block;
            padding: 0px 20px;
        }
    }
`