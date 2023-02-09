import {
    StyledHistory,
    StyledList,
    StyledListItem,
} from '@styles/History/style';
import React from 'react';
import { useSelector } from 'react-redux';

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
