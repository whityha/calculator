import React from 'react';
import { connect } from 'react-redux';

import HistoryDisplay from '../HistoryDisplay/HistoryDisplayCC';

import WrapperDisplay from './styled';

class Display extends React.PureComponent {
    render() {
        const { value } = this.props;
        return (
            <WrapperDisplay>
                <HistoryDisplay />
                <h1>{value}</h1>
            </WrapperDisplay>
        );
    }
}

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(Display);
