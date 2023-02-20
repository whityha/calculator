import React from 'react';
import { useSelector } from 'react-redux';

import { DisplayValue, HistoryDisplay, Wrapper } from './styled';

const Display = () => {
    const { value: val, historyValue: history } = useSelector(
        ({ display: { value, historyValue } }) => ({
            value,
            historyValue,
        })
    );
    return (
        <Wrapper>
            <HistoryDisplay data-test="historyDisplayValue">
                {history}
            </HistoryDisplay>
            <DisplayValue data-test="displayValue">{val}</DisplayValue>
        </Wrapper>
    );
};

export default React.memo(Display);
