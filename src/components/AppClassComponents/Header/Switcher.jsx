import React from 'react';
import { switchTheme } from '@actions/controlsActions';
import { StyledSwitcher, StyledHandler } from '@styles/Header/Switcher/style';
import { connect } from 'react-redux';

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.switchTheme = props.switchTheme;
    }

    render() {
        const {
            control: { theme },
        } = this.props;
        return (
            <StyledSwitcher onClick={this.switchTheme}>
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
