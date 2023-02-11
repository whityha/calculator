import React from 'react';
import { useSelector } from 'react-redux';
import BUTTONS from '@constants/buttons';

import Button from '../Button/ButtonFC';

import WrapperKeypad from './styled';

const Keypad = ({ handle }) => {
    const actualDig = useSelector(({ control: { actualDig: act } }) => act);
    return (
        <WrapperKeypad area={actualDig}>
            {BUTTONS.map(({ name, dig }) => (
                <Button
                    key={name}
                    name={name}
                    area={name}
                    onClick={handle(dig, name)}
                >
                    {dig}
                </Button>
            ))}
        </WrapperKeypad>
    );
};

export default Keypad;
