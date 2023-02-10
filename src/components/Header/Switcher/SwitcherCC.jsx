import React from 'react';
import { connect } from 'react-redux';
import { switchTheme } from '@actions/controlsActions';

import { StyledHandler, WrapperSwitcher } from './styled';

class Switcher extends React.Component {
    render() {
        const {
            control: { theme },
            switchTheme: swTheme,
        } = this.props;
        return (
            <WrapperSwitcher onClick={swTheme}>
                <StyledHandler
                    position={theme === 'light' ? 'right' : 'left'}
                />
            </WrapperSwitcher>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchTheme: () => {
            dispatch(switchTheme());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);
