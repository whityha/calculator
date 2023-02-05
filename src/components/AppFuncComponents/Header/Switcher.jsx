import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '@actions/controlsActions';

const StyledSwitcher = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 100px;
    background: ${({ theme }) => theme.background.secondary};
    outline: 1px solid ${({ theme }) => theme.background.border};
    cursor: pointer;
`;
const StyledHandler = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background: ${({ theme }) => theme.color.secondary};
    float: ${({ position }) => position};
`;

const Switcher = () => {
    const dispatch = useDispatch();
    const handleSwitcher = () => {
        dispatch(switchTheme());
    };
    const color = useSelector(({ control }) => control.theme);
    return (
        <StyledSwitcher onClick={handleSwitcher}>
            <StyledHandler position={color === 'light' ? 'right' : 'left'} />
        </StyledSwitcher>
    );
};

export default Switcher;
