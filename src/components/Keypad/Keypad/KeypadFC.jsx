import React from 'react';
import { useDispatch } from 'react-redux';
import BUTTONS from '@constants/buttons';
import controller from '@utils/controller';

import Button from '../Button/ButtonFC';

import WrapperKeypad from './styled';

const Keypad = () => {
    const dispatch = useDispatch();
    return (
        <WrapperKeypad>
            {BUTTONS.map(({ name, digit }) => (
                <Button
                    key={name}
                    name={name}
                    area={name}
                    onClick={controller(digit, name, dispatch)}
                >
                    {digit}
                </Button>
            ))}
        </WrapperKeypad>
    );
};

export default Keypad;
