import React from 'react';
import { connect } from 'react-redux';

import { HistoryDisplay, Wrapper } from './styled';

class Display extends React.PureComponent {
    render() {
        const { value, historyValue } = this.props;
        return (
            <Wrapper>
                <HistoryDisplay>{historyValue}</HistoryDisplay>
                <h1>{value}</h1>
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(Display);
