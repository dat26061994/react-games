import styled from 'styled-components';

const Styled = styled.div`

    @font-face {
        font-family: equilibrium;
        src: url(/images/snake/equilibrium.woff2);
    }

    position: relative;
    height: 100%;
    width: 100%;
    > * {
    position: absolute;
    }
    /* Logo */
    > :first-child {
    left: 15px;
    left: calc(15px + env(safe-area-inset-right));
    top: 15px;
    top: calc(15px + env(safe-area-inset-top));
    }

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    background-color: #9bba5a;
    color: rgba(0,0,0,.75);
    font-family: equilibrium,monospace;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    text-transform: uppercase;
    touch-action: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Styled;