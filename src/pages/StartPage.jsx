import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/AppStartPage/Button';

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    gap: 4rem;
    align-items: center;
    background: #fff
    height: 100vh;
    color: ${({ color }) => color};
`;

const StyledButtonsBlock = styled.div`
    display: flex;
    gap: 2rem;
`;

const StartPage = ({ color }) => {
    return (
        <StyledPage color={color}>
            <StyledButtonsBlock>
                <Link to="class">
                    <Button type="button">CLASS CALCULATOR</Button>
                </Link>
                <Link to="function">
                    <Button type="button">FUNCTIONAL CALCULATOR</Button>
                </Link>
            </StyledButtonsBlock>
        </StyledPage>
    );
};

export default StartPage;
