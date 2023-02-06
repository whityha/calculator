import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HistoryDisplay from './HistoryDisplay';

const StyledDisplay = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-area: display;
    padding: 1rem 5%;
    position: relative;
    &:after {
        content: '';
        display: block;
        width: 90%;
        height: 2px;
        background: ${({ theme: { background } }) => background.secondary};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
`;

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
