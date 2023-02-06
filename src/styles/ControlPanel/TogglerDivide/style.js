import styled from 'styled-components';

export const StyledTogglerDivide = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
`;

export const StyledLabel = styled.label`
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
