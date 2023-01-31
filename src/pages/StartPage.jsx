import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI-components/startPage/Button';

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    gap: 4rem;
    align-items: center;
    background: #fff
    height: 100vh;
    color: ${(props) => props.color};
`;

const StyledButtonsBlock = styled.div`
    display: flex;
    gap: 2rem;
`;

const StartPage = (props) => {
    const { color } = props;
    return (
        <StyledPage color={color}>
            <h1>Проверим работоспособность калькуляторов</h1>
            <StyledButtonsBlock>
                <Link to="class">
                    <Button type="button">КЛАССОВЫЙ КАЛЬКУЛЯТОР</Button>
                </Link>
                <Link to="function">
                    <Button type="button">ФУНКЦИОНАЛЬНЫЙ КАЛЬКУЛЯТОР</Button>
                </Link>
            </StyledButtonsBlock>
        </StyledPage>
    );
};

export default StartPage;
