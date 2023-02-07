import React from 'react';
import { clearHistory, clearAll } from '@actions/displayActions';
import { connect } from 'react-redux';
import {
    StyledControlPanel,
    Title,
} from '@styles/ControlPanel/ControlPanel/style';
import TogglerDivide from './TogglerDivide';
import Button from './Button';

class ControlPanel extends React.PureComponent {
    // const dispatch = useDispatch();
    // const clearHis = () => dispatch(clearHistory());
    // const clear = () => dispatch(clearAll());
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
