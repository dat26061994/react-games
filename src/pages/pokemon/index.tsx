import { useEffect, useState } from 'react';
import Card from '../../components/pokemon/Card';
import { PokemonWrapper } from './Styled'
import pokemons from '../../data/pokemon.json';
import { randomUniqueNumberInRange } from '../../helpers/gameHelpers';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {

    const pokemonsData = pokemons.data;
    const navigate = useNavigate();
    
    const [level, setLevel] = useState<number>(1);
    const [cards, setCards] = useState<any[]>([]);
    const [turn, setTurn] = useState<number>(0);
    const [choiceOne, setChoiceOne] = useState<any>(null)
    const [choiceTwo, setChoiceTwo] = useState<any>(null)
    const [disabled, setDisabled] = useState<boolean>(true);
    const [startFlip, setStartFlip] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
          setStartFlip(false)
        }, 1000);
        shuffleCards();
    }, []);

    useEffect(() => {
        let checkTurn = cards.every((c: any) => c.matched);
        
        if (checkTurn && cards.length && level < 5) {
            setLevel(level + 1);
            setStartFlip(false);
        }
    }, [cards])

    useEffect(() => {
        setTurn(0);
        shuffleCards();
    }, [level])

    useEffect(() => {
        if (choiceOne && choiceTwo) {
          setDisabled(true);
          if (choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
              return prevCards.map(card => {
                if (card.src === choiceOne.src) {
                  return { ...card, matched: true }
                } else {
                  return card
                }
              })
            })
            resetTurn();
          } else {
            setTimeout(() => {
              resetTurn();
            }, 1000);
          }
        }
    }, [choiceOne, choiceTwo]);

    const shuffleCards = () => {

        const count = Math.pow(2 * level, 2) / 2;
        
        const randomList = randomUniqueNumberInRange(0, pokemonsData.length, count);
        let initialCards = [] as any[];
        
        for (let i = 0; i < randomList.length; i++) {
            const index = randomList[i];
            const obj = { ...pokemonsData[index], id: Math.random(), matched: false };
            initialCards.push(obj);
        }

        const shuffledCards = [...initialCards, ...initialCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards);
        setTurn(0);
        setDisabled(false)
        setStartFlip(true)
        setTimeout(() => {
            setStartFlip(false)
        }, 1000);
    }

    const handleChoice = (card: any) => {
        choiceOne ? (
            choiceOne.id !== card.id &&
            setChoiceTwo(card))
            : setChoiceOne(card)
    }

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurn(prevTurn => prevTurn + 1)
        setDisabled(false)
    }

    const goToHome = () => {
        navigate('/')
    }

    return (
        <PokemonWrapper level={level}>

            <div className="flex mx-auto align-center justify-center pt-3">
                <p className="mx-1">Turns: {turn}</p>
                <p className="mx-1">Level: {level}</p>
            </div>
            <button className="btn-start-game" onClick={shuffleCards}>New Game</button>
            <button className="btn-start-game" onClick={goToHome}>Home</button>

          <div className="grid pokemon-container mx-auto">
            {cards.map(card => (
              <Card
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
                disabled={disabled}
                matched={card.matched}
              />
            ))}
          </div>
          
        </PokemonWrapper>
    );
}

export default Pokemon;