import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { List, ListItem, Title, Wrapper } from './styled';

class History extends React.PureComponent {
    render() {
        const {
            display: { historyList },
            settings: { isShowHistory },
        } = this.props;
        return (
            <Wrapper data-test="history" isShow={isShowHistory}>
                <Title>History</Title>
                <List>
                    {historyList.map(({ expression, id }) => (
                        <ListItem key={id}>{expression}</ListItem>
                    ))}
                </List>
            </Wrapper>
        );
    }
}

History.propTypes = {
    display: PropTypes.shape({
        value: PropTypes.number,
        historyValue: PropTypes.string,
        historyList: PropTypes.shape,
    }),
    settings: PropTypes.shape({
        theme: PropTypes.string,
        isShowHistory: PropTypes.bool,
    }),
};

const mapStateToProps = (state) => ({
    display: state.display,
    settings: state.settings,
});

export default connect(mapStateToProps)(History);
