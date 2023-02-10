import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/StartPage/Button';
import { CC_PATH, FC_PATH } from '@constants/paths';

import { StyledButtonsBlock, StyledPage } from './styled';

const StartPage = ({ color }) => (
    <StyledPage color={color}>
        <StyledButtonsBlock>
            <Link to={CC_PATH}>
                <Button type="button">CLASS CALCULATOR</Button>
            </Link>
            <Link to={FC_PATH}>
                <Button type="button">FUNCTIONAL CALCULATOR</Button>
            </Link>
        </StyledButtonsBlock>
    </StyledPage>
);

export default StartPage;
