import React from 'react';
import { connect } from 'react-redux';

import { StyledList, StyledListItem, WrapperHistory } from './styled';

class History extends React.PureComponent {
    render() {
        const { formulas } = this.props;
        return (
            <WrapperHistory>
                <h1>History</h1>
                <StyledList>
                    {formulas.map(({ formula, id }) => (
                        <StyledListItem key={id}>{formula}</StyledListItem>
                    ))}
                </StyledList>
            </WrapperHistory>
        );
    }
}

const mapStateToProps = (state) => {
    return state.display;
};

export default connect(mapStateToProps)(History);
