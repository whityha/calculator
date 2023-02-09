import React from 'react';
import { connect } from 'react-redux';
import StyledDisplay from '@styles/Display/Display/style';

import HistoryDisplay from './HistoryDisplay';

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
