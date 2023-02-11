import React from 'react';
import { connect } from 'react-redux';
import BUTTONS from '@constants/buttons';

import Button from '../Button/ButtonCC';

import WrapperKeypad from './styled';

class Keypad extends React.Component {
    render() {
        const { handle, actualDig } = this.props;
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
    }
}

const mapStateToProps = ({ control }) => control;

export default connect(mapStateToProps)(Keypad);
