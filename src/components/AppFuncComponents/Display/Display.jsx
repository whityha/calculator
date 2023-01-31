import React from 'react';
import styled from 'styled-components';

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
        background: white;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
`;

const Display = () => {
    return (
        <StyledDisplay>
            <h1>100</h1>
        </StyledDisplay>
    );
};

export default Display;
