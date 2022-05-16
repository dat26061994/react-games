import { useState, useEffect } from 'react';

import { GameWrapper, BoxWrapper } from './StyledGame';
import Grid from '@mui/material/Grid';

const Game = () => {

    const [level, setLevel] = useState<number>(1);
    const [question, setQuestion] = useState<any>();
    const [answer, setAnswer] = useState<any>();
    const [timer, setTimer] = useState<any>();

    return(
        <GameWrapper>
            <div className="w-full">

                <div>

                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BoxWrapper height={150}>
                            <div className="shape-inner question-container hexagon">
                                Question
                            </div>
                        </BoxWrapper>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <BoxWrapper height={80}>
                            <div className="shape-inner answer-container hexagon">
                                Answer
                            </div>
                        </BoxWrapper>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxWrapper height={80}>
                            <div className="shape-inner answer-container hexagon">
                                Answer
                            </div>
                        </BoxWrapper>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxWrapper height={80}>
                            <div className="shape-inner answer-container hexagon">
                                Answer
                            </div>
                        </BoxWrapper>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxWrapper height={80}>
                            <div className="shape-inner answer-container hexagon">
                                Answer
                            </div>
                        </BoxWrapper>
                    </Grid>
                </Grid>
                
                <div className="hex">
                    <div className="hex-background">
                        123
                    </div>
                </div>

                <div className="">

                </div>
            </div>
        </GameWrapper>
    );
}

export default Game;