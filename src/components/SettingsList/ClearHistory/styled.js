import styled from 'styled-components';

const Button = styled.button`
    width: ${({ theme: { width } }) => width.md};
    padding: ${({ theme: { padding } }) => padding.p2}px;
    background: ${({ theme: { backgroundSecondary } }) => backgroundSecondary};
    border: ${({ theme: { border } }) => border.original};
    cursor: pointer;
    &:hover {
        transform: scale(1.01);
        transition: ${({ theme: { transition } }) => transition.fast};
    }
    &:active {
        transform: scale(1);
        transition: ${({ theme: { transition } }) => transition.fast};
    }
`;

export default Button;
