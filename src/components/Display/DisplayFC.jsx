import React from 'react';
import { useSelector } from 'react-redux';

import { HistoryDisplay, Wrapper } from './styled';

const Display = () => {
    const { value: val, historyValue: history } = useSelector(
        ({ display: { value, historyValue } }) => ({
            value,
            historyValue,
        })
    );
    return (
        <Wrapper>
            <HistoryDisplay>{history}</HistoryDisplay>
            <h1>{val}</h1>
        </Wrapper>
    );
};

export default React.memo(Display);
