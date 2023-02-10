import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActualDig } from '@actions/controlsActions';

import Input from './styled';

const HiddenInput = ({ children, id, name, type }) => {
    const dispatch = useDispatch();
    const actualDig = useSelector(
        ({ control: { actualDig: actual } }) => actual
    );
    const setActual = (actual) => () => {
        dispatch(setActualDig(actual));
    };
    return (
        <>
            <Input
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

export default HiddenInput;
