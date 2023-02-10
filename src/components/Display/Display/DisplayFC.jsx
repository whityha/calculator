import React from 'react';
import { useSelector } from 'react-redux';

import HistoryDisplay from '../HistoryDisplay/HistoryDisplayFC';

import WrapperDisplay from './styled';

const Display = () => {
    const value = useSelector(({ display: { value: val } }) => val);

    return (
        <WrapperDisplay>
            <HistoryDisplay />
            <h1>{value}</h1>
        </WrapperDisplay>
    );
};

export default React.memo(Display);
