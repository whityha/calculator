import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHistoryDisplay = styled.div`
    display: block;
    position: absolute;
    font-size: 16px;
    top: 5%;
    right: 5%;
    color: #c7b9b9;
`;

const HistoryDisplay = () => {
    const value = useSelector(({ display: { historyValue } }) => historyValue);
    return <StyledHistoryDisplay>{value}</StyledHistoryDisplay>;
};

export default React.memo(HistoryDisplay);
