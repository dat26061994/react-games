import styled from 'styled-components';
const boxWidth = 100;
const boxheight = 150;

export const GameWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    .hex {
        display: block;
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 150px; /* width * 0.866 */
        background: red;
        box-sizing: border-box;
        -webkit-clip-path: polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%);
        -moz-clip-path: polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%);
    }

    .hex-background {
        position: absolute;
        background-color: orange; /*color of the main-background*/
        top: 10px; /* equal to border thickness */
        left: 10px; /* equal to border thickness */
        width: calc(100% - 20px); /* container height - (border thickness * 2) */
        height: 130px; /* container height - (border thickness * 2) */
        -webkit-clip-path: polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%);
        -moz-clip-path: polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%);
    }

    .hex img {
        position: absolute;
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        -webkit-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
        -moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
    }


`

export const BoxWrapper = styled.div `
    display: flex;
    flex-shrink: 0;
    height: ${props => props.height}px;
    width: 100%;
    margin: 0px 25px;
    background-image: linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);
        -webkit-clip-path: polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%);
        clip-path: polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%);

    .shape-inner {	
        height: ${props => props.height - 20}px;
        width: calc(100% - 20px);
        background: #000000;
        color: #ffffff;
        background-size: cover;
        margin: auto;
        text-align: left;
        -webkit-clip-path: polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%);
        clip-path: polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%);
    }

    .question-container {
        padding: 10px 80px;
    }

    .answer-container {
        padding: 10px 40px;
    }

`