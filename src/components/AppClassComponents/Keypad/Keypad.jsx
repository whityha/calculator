import BUTTONS from '@constants/buttons';
import StyledKeypad from '@styles/Keypad/Keypad/style';
import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';

class Keypad extends React.PureComponent {
    render() {
        const { handle, exception, actualDig } = this.props;
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
    }
}

const mapStateToProps = ({ control }) => control;

export default connect(mapStateToProps)(Keypad);
