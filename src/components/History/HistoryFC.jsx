import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem, Title, WrapperHistory } from './styled';

const History = () => {
    const historyList = useSelector(
        ({ display: { historyList: forms } }) => forms
    );
    return (
        <WrapperHistory>
            <Title>History</Title>
            <List>
                {historyList.map(({ expression, id }) => (
                    <ListItem key={id}>{expression}</ListItem>
                ))}
            </List>
        </WrapperHistory>
    );
};

export default History;
