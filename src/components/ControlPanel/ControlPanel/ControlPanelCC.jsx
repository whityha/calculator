import React from 'react';
import { connect } from 'react-redux';
import { clearAll, clearHistory } from '@actions/displayActions';

import Button from '../Button/ButtonCC';
import TogglerDivide from '../TogglerDivide/TogglerDivideCC';

import { StyledControlPanel, Title } from './styled';

class ControlPanel extends React.PureComponent {
    render() {
        const { clear, clearHis } = this.props;
        return (
            <StyledControlPanel>
                <Title>Controls</Title>
                <TogglerDivide />
                <Button onClick={clearHis}>Clear history</Button>
                <Button onClick={clear}>Clear ALL</Button>
            </StyledControlPanel>
        );
    }
}

const mapStateToProps = ({ control }) => control;
const mapDispatchToProps = (dispatch) => {
    return {
        clearHis: () => dispatch(clearHistory()),
        clear: () => dispatch(clearAll()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
