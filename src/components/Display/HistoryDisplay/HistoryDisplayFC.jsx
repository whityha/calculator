import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from './styled';

const HistoryDisplay = () => {
    const value = useSelector(({ display: { historyValue } }) => historyValue);
    return <Wrapper>{value}</Wrapper>;
};

export default React.memo(HistoryDisplay);
