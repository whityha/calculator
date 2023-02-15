import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, Title, WrapperHistory } from './styled';

class History extends React.PureComponent {
    render() {
        const { historyList } = this.props;
        return (
            <WrapperHistory>
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

const mapStateToProps = (state) => state.display;

export default connect(mapStateToProps)(History);
