import React from 'react';
import { connect } from 'react-redux';
import BUTTONS from '@constants/buttons';
import controller from '@utils/controller';

import { Button, Wrapper } from './styled';

class Keypad extends React.Component {
    render() {
        const { dispatch } = this.props;
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => {
        dispatch(action);
    },
});

export default connect(mapDispatchToProps)(Keypad);
