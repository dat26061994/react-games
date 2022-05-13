import React from 'react';
import { TETROMINOS } from '../../helpers/tetrominos';
import { StyledCellWrapper } from './StyledCell';

const Cell = (props: any) => {
    const { type } = props;
    
    return (
        <StyledCellWrapper type={type} backgroundColor={TETROMINOS[type].color}></StyledCellWrapper>
    );
}

export default Cell;