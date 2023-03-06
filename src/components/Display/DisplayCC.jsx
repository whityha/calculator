import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { DisplayValue, HistoryDisplay, Wrapper } from './styled';

class Display extends React.PureComponent {
    render() {
        const { value, historyValue } = this.props;
        return (
            <Wrapper>
                <HistoryDisplay data-test="historyDisplayValue">
                    {historyValue}
                </HistoryDisplay>
                <DisplayValue data-test="displayValue">{value}</DisplayValue>
            </Wrapper>
        );
    }
}

Display.propTypes = {
    value: PropTypes.string,
    historyValue: PropTypes.string,
};

const mapStateToProps = ({ display }) => display;

export default connect(mapStateToProps)(Display);
