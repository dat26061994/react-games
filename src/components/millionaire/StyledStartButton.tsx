import styled from 'styled-components';

export const StartButtonWrapper = styled.button`
    background: orange;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    min-width: 150px;

    :after {
        content: "";
        float: left;
        position: absolute;
        top: 0;
        right: -23px;
        width: 0;
        height: 0;
        border-color: transparent transparent transparent orange;
        border-style: solid;
        border-width: 24px 0 23px 23px;
    }

    :before {
        content: "";
        float: left;
        position: absolute;
        top: 0;
        left: -23px;
        width: 0;
        height: 0;
        border-color: transparent transparent transparent orange;
        border-style: solid;
        border-width: 24px 0 23px 23px;
        transform: rotate(180deg);
    }
`