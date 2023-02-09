import React from 'react';
import { connect } from 'react-redux';
import { clearAll, clearHistory } from '@actions/displayActions';
import {
    StyledControlPanel,
    Title,
} from '@styles/ControlPanel/ControlPanel/style';

import Button from './Button';
import TogglerDivide from './TogglerDivide';

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
