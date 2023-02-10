import React from 'react';
import { connect } from 'react-redux';

import WrapperHistoryDisplay from './styled';

class HistoryDisplay extends React.PureComponent {
    render() {
        const { historyValue } = this.props;
        return <WrapperHistoryDisplay>{historyValue}</WrapperHistoryDisplay>;
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(HistoryDisplay);
