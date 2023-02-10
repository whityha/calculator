import React from 'react';
import { connect } from 'react-redux';
import { switchTheme } from '@actions/controlsActions';

import { StyledHandler, StyledSwitcher } from './styled';

class Switcher extends React.Component {
    render() {
        const {
            control: { theme },
            switchTheme: swTheme,
        } = this.props;
        return (
            <StyledSwitcher onClick={swTheme}>
                <StyledHandler
                    position={theme === 'light' ? 'right' : 'left'}
                />
            </StyledSwitcher>
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
