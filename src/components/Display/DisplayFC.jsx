import React from 'react';
import { useSelector } from 'react-redux';

import HistoryDisplay from './HistoryDisplay/HistoryDisplayFC';
import Wrapper from './styled';

const Display = () => {
    const value = useSelector(({ display: { value: val } }) => val);

    return (
        <Wrapper>
            <HistoryDisplay />
            <h1>{value}</h1>
        </Wrapper>
    );
};

export default React.memo(Display);
