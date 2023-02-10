import React from 'react';
import { useSelector } from 'react-redux';
import BUTTONS from '@constants/buttons';

import Button from '../Button/ButtonFC';

import StyledKeypad from './styled';

const Keypad = ({ handle }) => {
    const exception = useSelector(({ control: { exception: exc } }) => exc);
    const actualDig = useSelector(({ control: { actualDig: act } }) => act);
    return (
        <StyledKeypad area={actualDig}>
            {BUTTONS.filter(({ name }) => name !== exception).map(
                ({ name, dig }) => (
                    <Button
                        key={name}
                        name={name}
                        area={name}
                        onClick={handle(dig, name)}
                    >
                        {dig}
                    </Button>
                )
            )}
        </StyledKeypad>
    );
};

export default Keypad;
