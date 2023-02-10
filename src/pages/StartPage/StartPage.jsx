import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/StartPage/Button';

import { StyledButtonsBlock, StyledPage } from './styled';

const StartPage = ({ color }) => (
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

export default StartPage;
