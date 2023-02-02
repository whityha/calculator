import React from 'react';
import styled from 'styled-components';

const StyledSwitcher = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 100px;
    background: white;
    cursor: pointer;
`;
const StyledHandler = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background: #9dabe5;
`;

const Switcher = () => {
    return (
        <StyledSwitcher>
            <StyledHandler />
        </StyledSwitcher>
    );
};

export default Switcher;
