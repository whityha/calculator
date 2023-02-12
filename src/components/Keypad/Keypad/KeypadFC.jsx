import React from 'react';
import { useSelector } from 'react-redux';
import BUTTONS from '@constants/buttons';

import Button from '../Button/ButtonFC';

import WrapperKeypad from './styled';

const Keypad = ({ handle }) => {
    const actualDigit = useSelector(({ control: { actualDigit: act } }) => act);
    return (
        <WrapperKeypad area={actualDigit}>
            {BUTTONS.map(({ name, digit }) => (
                <Button
                    key={name}
                    name={name}
                    area={name}
                    onClick={handle(digit, name)}
                >
                    {digit}
                </Button>
            ))}
        </WrapperKeypad>
    );
};

export default Keypad;
