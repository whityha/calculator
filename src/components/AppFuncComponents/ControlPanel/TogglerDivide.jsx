import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setActualDig } from '@actions/controlsActions';

const StyledTogglerDivide = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
`;

const StyledLabel = styled.label`
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    input[type='radio']:checked + span {
        outline: 5px solid #4789c0;
    }
    input + span {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        background: ${({ theme: { background } }) => background.secondary};
        color: ${({ theme: { color } }) => color.secondary};
        line-height: 30px;
        text-align: center;
    }
`;

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
