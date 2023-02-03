import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clear } from '../../../store/actions/displayActions';

const StyledButton = styled.button`
    color: black;
    padding: 1rem 0.5rem;
    cursor: pointer;
`;

const DeepClearButton = () => {
    const dispatch = useDispatch();
    const clearAll = () => dispatch(clear({ deep: 'deep' }));
    return (
        <StyledButton type="button" onClick={clearAll}>
            Очистить ВСЁ
        </StyledButton>
    );
};

export default DeepClearButton;
