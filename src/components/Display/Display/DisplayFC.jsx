import React from 'react';
import { useSelector } from 'react-redux';

import HistoryDisplay from '../HistoryDisplay/HistoryDisplayFC';

import StyledDisplay from './styled';

const Display = () => {
    const value = useSelector(({ display: { value: val } }) => val);

    return (
        <StyledDisplay>
            <HistoryDisplay />
            <h1>{value}</h1>
        </StyledDisplay>
    );
};

export default React.memo(Display);
