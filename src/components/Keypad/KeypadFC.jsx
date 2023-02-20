import React from 'react';
import { useDispatch } from 'react-redux';
import { BUTTONS } from '@constants';
import controller from '@utils/controller';

import { Button, Wrapper } from './styled';

const Keypad = () => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            {BUTTONS.map(({ name, value }) => (
                <Button
                    key={name}
                    name={name}
                    area={name}
                    onClick={controller(value, name, dispatch)}
                >
                    {value}
                </Button>
            ))}
        </Wrapper>
    );
};

export default Keypad;
