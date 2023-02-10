import React from 'react';
import { useSelector } from 'react-redux';

import WrapperHistoryDisplay from './styled';

const HistoryDisplay = () => {
    const value = useSelector(({ display: { historyValue } }) => historyValue);
    return <WrapperHistoryDisplay>{value}</WrapperHistoryDisplay>;
};

export default React.memo(HistoryDisplay);
