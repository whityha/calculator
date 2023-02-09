import React from 'react';
import { connect } from 'react-redux';
import {
    StyledHistory,
    StyledList,
    StyledListItem,
} from '@styles/History/style';

class History extends React.PureComponent {
    render() {
        const { formulas } = this.props;
        return (
            <StyledHistory>
                <h1>History</h1>
                <StyledList>
                    {formulas.map(({ formula, id }) => (
                        <StyledListItem key={id}>{formula}</StyledListItem>
                    ))}
                </StyledList>
            </StyledHistory>
        );
    }
}

const mapStateToProps = (state) => {
    return state.display;
};

export default connect(mapStateToProps)(History);
