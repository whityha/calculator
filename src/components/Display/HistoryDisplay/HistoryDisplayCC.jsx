import React from 'react';
import { connect } from 'react-redux';

import Wrapper from './styled';

class HistoryDisplay extends React.PureComponent {
    render() {
        const { historyValue } = this.props;
        return <Wrapper>{historyValue}</Wrapper>;
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(HistoryDisplay);
