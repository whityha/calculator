import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearHistory } from '../../../store/actions/displayActions';

const StyledButton = styled.button`
    color: black;
    padding: 1rem 0.5rem;
    cursor: pointer;
`;

const ClearButton = () => {
    const dispatch = useDispatch();
    const clear = () => dispatch(clearHistory());
    return (
        <StyledButton type="button" onClick={clear}>
            Очистить историю
        </StyledButton>
    );
};

export default ClearButton;
