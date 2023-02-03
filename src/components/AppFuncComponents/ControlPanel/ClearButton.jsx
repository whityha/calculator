import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clear } from '../../../store/actions/displayActions';

const StyledButton = styled.button`
    color: black;
    padding: 1rem 0.5rem;
    cursor: pointer;
`;

const ClearButton = () => {
    const dispatch = useDispatch();
    const clearHistory = () => dispatch(clear({ deep: 'clearHistory' }));
    return (
        <StyledButton type="button" onClick={clearHistory}>
            Очистить историю
        </StyledButton>
    );
};

export default ClearButton;
