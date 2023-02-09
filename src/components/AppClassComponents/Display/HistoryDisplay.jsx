import StyledHistoryDisplay from '@styles/Display/HistoryDisplay/style';
import React from 'react';
import { connect } from 'react-redux';

class HistoryDisplay extends React.PureComponent {
    render() {
        const { historyValue } = this.props;
        return <StyledHistoryDisplay>{historyValue}</StyledHistoryDisplay>;
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(HistoryDisplay);
