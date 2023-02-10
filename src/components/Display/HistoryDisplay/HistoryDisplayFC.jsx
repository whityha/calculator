import React from 'react';
import { useSelector } from 'react-redux';

import StyledHistoryDisplay from './styled';

const HistoryDisplay = () => {
    const value = useSelector(({ display: { historyValue } }) => historyValue);
    return <StyledHistoryDisplay>{value}</StyledHistoryDisplay>;
};

export default React.memo(HistoryDisplay);
