import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem, Title, WrapperHistory } from './styled';

const History = () => {
    const formulas = useSelector(({ display: { formulas: forms } }) => forms);
    return (
        <WrapperHistory>
            <Title>History</Title>
            <List>
                {formulas.map(({ formula, id }) => (
                    <ListItem key={id}>{formula}</ListItem>
                ))}
            </List>
        </WrapperHistory>
    );
};

export default History;
