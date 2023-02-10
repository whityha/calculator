import React from 'react';
import { connect } from 'react-redux';
import { setActualDig } from '@actions/controlsActions';

import StyledInput from './styled';

class InputRadio extends React.PureComponent {
    render() {
        const {
            actualDig: actual,
            children,
            id,
            name,
            type,
            setActual,
        } = this.props;
        return (
            <>
                <StyledInput
                    checked={actual === id}
                    style={{ display: 'none' }}
                    onChange={setActual(id)}
                    id={id}
                    name={name}
                    type={type}
                />
                <span> {children} </span>
            </>
        );
    }
}

const mapStateToProps = ({ control }) => control;
const mapDispatchToProps = (dispatch) => {
    return {
        setActual: (id) => () => {
            dispatch(setActualDig(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRadio);
