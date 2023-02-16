import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem, Title, Wrapper } from './styled';

const History = () => {
    const isShow = useSelector(({ control }) => control.historyIsShow);

    const historyList = useSelector(
        ({ display: { historyList: expressions } }) => expressions
    );
    return (
        <Wrapper isShow={isShow}>
            <Title>History</Title>
            <List>
                {historyList.map(({ expression, id }) => (
                    <ListItem key={id}>{expression}</ListItem>
                ))}
            </List>
        </Wrapper>
    );
};

export default History;
