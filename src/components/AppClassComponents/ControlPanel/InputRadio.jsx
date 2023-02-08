import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { setActualDig } from '@actions/controlsActions';
import { connect } from 'react-redux';

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
                <input
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
