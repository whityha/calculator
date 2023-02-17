import React from 'react';
import { useDispatch } from 'react-redux';
import BUTTONS from '@constants/buttons';
import controller from '@utils/controller';

import { Button, Wrapper } from './styled';

const Keypad = () => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

export default Keypad;
