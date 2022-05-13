import React from 'react';
import Cell from './Cell';
import { StyledStageWrapper } from './StyledStage';

const Stage = (props: any) => {
    const { stage } = props;
    
    return (
        <StyledStageWrapper width={stage[0].length} height={stage.length}>
            { stage.map((row: any) => row.map((cell: any, x: any) => <Cell key={x} type={cell[0]} />)) }
        </StyledStageWrapper>
    );
}

export default Stage;