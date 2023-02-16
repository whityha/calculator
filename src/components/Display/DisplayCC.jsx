import React from 'react';
import { connect } from 'react-redux';

import HistoryDisplay from './HistoryDisplay/HistoryDisplayCC';
import Wrapper from './styled';

class Display extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <Wrapper>
                <HistoryDisplay />
                <h1>{value}</h1>
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(Display);
