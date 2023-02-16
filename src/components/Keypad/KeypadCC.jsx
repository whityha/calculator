import React from 'react';
import { connect } from 'react-redux';
import BUTTONS from '@constants/buttons';
import controller from '@utils/controller';

import Button from './Button/ButtonCC';
import WrapperKeypad from './styled';

class Keypad extends React.Component {
    render() {
        const { dispatch } = this.props;
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => {
        dispatch(action);
    },
});

export default connect(mapDispatchToProps)(Keypad);
