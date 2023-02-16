import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, Title, WrapperHistory } from './styled';

class History extends React.PureComponent {
    render() {
        const {
            display: { historyList },
            control: { historyIsShow },
        } = this.props;
        return (
            <WrapperHistory isShow={historyIsShow}>
                <Title>History</Title>
                <List>
                    {historyList.map(({ expression, id }) => (
                        <ListItem key={id}>{expression}</ListItem>
                    ))}
                </List>
            </WrapperHistory>
        );
    }
}

const mapStateToProps = (state) => ({
    display: state.display,
    control: state.control,
});

export default connect(mapStateToProps)(History);
