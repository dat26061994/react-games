import styled from 'styled-components';

export const PokemonWrapper = styled.div`
    background-image: url('/images/poketheme.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    .pokemon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container button {
    color: white;
    background-color: black;
    border: 2px solid white;
    width: 7rem;
    height: 3rem;
    font-family: monospace;
    font-size: 1rem;
}

.container button:hover {
    filter: brightness(0.7);
    cursor: pointer;
}

p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; 
    font-family: monospace;
    font-size: 1.5rem;
    background-color: black;
    border: 2px solid white;
    width: 10rem;
    height: 4rem;
}

.btn-start-game {
    margin-top: 20px;
    font-family: monospace;
    font-size: 1.5rem;
    background-color: black;
    border: 2px solid white;
    color: white;
    width: 10rem;
    height: 4rem;
}

.grid {
    height: auto;
    overflow-y: auto;
    width: ${props => (props.level == 1 || props.level == 2 ? '600px' : '80%')};
    display: grid;
    grid-template-columns: ${props => (
        props.level == 1 || props.level == 2 ? '1fr 1fr 1fr 1fr' :
        props.level == 3 ? '1fr 1fr 1fr 1fr 1fr 1fr' :
        props.level == 4 ? '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' :
        '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr')};
    grid-gap: 1em;
}

.grid div img {
    width: 80%;
}
`