import React from 'react';
import { useSelector } from 'react-redux';

import { StyledHistory, StyledList, StyledListItem } from './styled';

const History = () => {
    const formulas = useSelector(({ display: { formulas: forms } }) => forms);
    return (
        <StyledHistory>
            <h1>History</h1>
            <StyledList>
                {formulas.map(({ formula, id }) => (
                    <StyledListItem key={id}>{formula}</StyledListItem>
                ))}
            </StyledList>
        </StyledHistory>
    );
};

export default History;
