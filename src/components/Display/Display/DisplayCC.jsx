import React from 'react';
import { connect } from 'react-redux';

import HistoryDisplay from '../HistoryDisplay/HistoryDisplayCC';

import StyledDisplay from './styled';

class Display extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <StyledDisplay>
                <HistoryDisplay />
                <h1>{value}</h1>
            </StyledDisplay>
        );
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(Display);
