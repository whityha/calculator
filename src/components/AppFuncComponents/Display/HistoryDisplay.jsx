import StyledHistoryDisplay from '@styles/Display/HistoryDisplay/style';
import React from 'react';
import { useSelector } from 'react-redux';

const HistoryDisplay = () => {
    const value = useSelector(({ display: { historyValue } }) => historyValue);
    return <StyledHistoryDisplay>{value}</StyledHistoryDisplay>;
};

export default React.memo(HistoryDisplay);
