import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
    setActualDig,
    setException,
} from '../../../store/actions/controlsActions';

const StyledTogglerDivide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
`;

const StyledLabel = styled.label`
    cursor: pointer;
`;

const InputRadio = (props) => {
    const { id, name, type } = props;
    const dispatch = useDispatch();
    const actualDig = useSelector((state) => state.control.actualDig);
    const exception = useSelector((state) => state.control.exception);
    const setActual = (actual) => {
        dispatch(setActualDig(actual));
    };
    const setExc = (exc) => {
        dispatch(setException(exc));
    };
    const makeToggle = () => {
        setActual(exception);
        setExc(actualDig);
    };
    return <input onChange={makeToggle} id={id} name={name} type={type} />;
};

const TogglerDivide = () => {
    return (
        <StyledTogglerDivide>
            <StyledLabel htmlFor="divide">
                / <InputRadio id="divide" name="toggler" type="radio" />
            </StyledLabel>
            <StyledLabel htmlFor="remainder">
                % <InputRadio id="remainder" name="toggler" type="radio" />
            </StyledLabel>
        </StyledTogglerDivide>
    );
};

export default TogglerDivide;
