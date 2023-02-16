import styled from 'styled-components';

const Button = styled.button`
    width: ${({ theme: { width } }) => width.md};
    padding: ${({ theme: { padding } }) => padding.p2}px;
    background: ${({ theme: { backgroundSecondary } }) => backgroundSecondary};
    border: ${({ theme: { border } }) => border.original};
    color: ${({ theme: { colorSecondary } }) => colorSecondary};

    cursor: pointer;
    &:hover {
        transform: scale(1.01);
        transition: ${({ theme: { transition } }) => transition.fast};
    }
    &:active {
        transform: scale(1);
        transition: ${({ theme: { transition } }) => transition.fast};
    }

    @media ${({ theme: { media } }) => media.phone} {
        width: ${({ theme: { width } }) => `${width.max}`};
    }
`;

export default Button;
