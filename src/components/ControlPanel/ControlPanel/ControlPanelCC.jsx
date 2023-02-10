import React from 'react';
import { connect } from 'react-redux';
import { clearAll, clearHistory } from '@actions/displayActions';

import Button from '../Button/ButtonCC';
import TogglerDivide from '../TogglerDivide/TogglerDivideCC';

import { Title, WrapperControlPanel } from './styled';

class ControlPanel extends React.Component {
    render() {
        const { clear, clearHis } = this.props;
        return (
            <WrapperControlPanel>
                <Title>Controls</Title>
                <TogglerDivide />
                <Button onClick={clearHis}>Clear history</Button>
                <Button onClick={clear}>Clear ALL</Button>
            </WrapperControlPanel>
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
