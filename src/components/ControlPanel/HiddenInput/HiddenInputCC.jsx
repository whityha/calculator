import React from 'react';
import { connect } from 'react-redux';
import { setActualDig } from '@actions/controlsActions';

import Input from './styled';

class HiddenInput extends React.Component {
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
                <Input
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
const mapDispatchToProps = (dispatch) => ({
    setActual: (id) => () => {
        dispatch(setActualDig(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HiddenInput);
