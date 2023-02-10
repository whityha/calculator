import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, WrapperHistory } from './styled';

class History extends React.PureComponent {
    render() {
        const { formulas } = this.props;
        return (
            <WrapperHistory>
                <h1>History</h1>
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
