import React from 'react';
import { connect } from 'react-redux';

import StyledHistoryDisplay from './styled';

class HistoryDisplay extends React.PureComponent {
    render() {
        const { historyValue } = this.props;
        return <StyledHistoryDisplay>{historyValue}</StyledHistoryDisplay>;
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(HistoryDisplay);
