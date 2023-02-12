import React from 'react';
import { connect } from 'react-redux';
import BUTTONS from '@constants/buttons';

import Button from '../Button/ButtonCC';

import WrapperKeypad from './styled';

class Keypad extends React.Component {
    render() {
        const { handle, actualDigit } = this.props;
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
    }
}

const mapStateToProps = ({ control }) => control;

export default connect(mapStateToProps)(Keypad);
