import styled from 'styled-components';

const StyledInput = styled.input`
    &[type='radio']:checked + span {
        outline: 5px solid #4789c0;
    }
    & + span {
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

export default StyledInput;
