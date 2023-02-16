import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, Title, WrapperHistory } from './styled';

class History extends React.PureComponent {
    render() {
        const {
            display: { formulas },
            control: { historyIsShow },
        } = this.props;
        return (
            <WrapperHistory isShow={historyIsShow}>
                <Title>History</Title>
                <List>
                    {formulas.map(({ formula, id }) => (
                        <ListItem key={id}>{formula}</ListItem>
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
