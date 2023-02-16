import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, Title, Wrapper } from './styled';

class History extends React.PureComponent {
    render() {
        const {
            display: { historyList },
            control: { historyIsShow },
        } = this.props;
        return (
            <Wrapper isShow={historyIsShow}>
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

const mapStateToProps = (state) => ({
    display: state.display,
    control: state.control,
});

export default connect(mapStateToProps)(History);
