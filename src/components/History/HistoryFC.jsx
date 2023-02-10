import React from 'react';
import { useSelector } from 'react-redux';

import { StyledList, StyledListItem, WrapperHistory } from './styled';

const History = () => {
    const formulas = useSelector(({ display: { formulas: forms } }) => forms);
    return (
        <WrapperHistory>
            <h1>History</h1>
            <StyledList>
                {formulas.map(({ formula, id }) => (
                    <StyledListItem key={id}>{formula}</StyledListItem>
                ))}
            </StyledList>
        </WrapperHistory>
    );
};

export default History;
