import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, Title, WrapperHistory } from './styled';

class History extends React.PureComponent {
    render() {
        const { formulas } = this.props;
        return (
            <WrapperHistory>
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

const mapStateToProps = (state) => state.display;

export default connect(mapStateToProps)(History);
