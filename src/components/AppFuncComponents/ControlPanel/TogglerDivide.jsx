import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActualDig } from '@actions/controlsActions';
import {
    StyledTogglerDivide,
    StyledLabel,
} from '@styles/ControlPanel/TogglerDivide/style';

const InputRadio = ({ children, id, name, type }) => {
    const dispatch = useDispatch();
    const actualDig = useSelector(
        ({ control: { actualDig: actual } }) => actual
    );
    const setActual = (actual) => () => {
        dispatch(setActualDig(actual));
    };
    return (
        <>
            <input
                checked={actualDig === id}
                style={{ display: 'none' }}
                onChange={setActual(id)}
                id={id}
                name={name}
                type={type}
            />
            <span> {children} </span>
        </>
    );
};

const TogglerDivide = () => {
    return (
        <StyledTogglerDivide>
            <StyledLabel htmlFor="divide">
                <InputRadio id="divide" name="toggler" type="radio">
                    /
                </InputRadio>
            </StyledLabel>
            <StyledLabel htmlFor="remainder">
                <InputRadio id="remainder" name="toggler" type="radio">
                    %
                </InputRadio>
            </StyledLabel>
        </StyledTogglerDivide>
    );
};

export default TogglerDivide;
