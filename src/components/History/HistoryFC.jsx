import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem, WrapperHistory } from './styled';

const History = () => {
    const formulas = useSelector(({ display: { formulas: forms } }) => forms);
    return (
        <WrapperHistory>
            <h1>History</h1>
            <List>
                {formulas.map(({ formula, id }) => (
                    <ListItem key={id}>{formula}</ListItem>
                ))}
            </List>
        </WrapperHistory>
    );
};

export default History;
