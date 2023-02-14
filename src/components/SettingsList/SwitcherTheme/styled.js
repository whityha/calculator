import styled, { css } from 'styled-components';

export const Title = styled.h3`
    padding: ${({
        theme: {
            padding: { p0, p2 },
        },
    }) => `${p2}px ${p2}px ${p2}px ${p0}px`};
`;

export const Option = styled.option`
    padding: ${({ theme: { padding } }) => padding.p1}px;
`;

export const Switcher = styled.select`
    ${({
        theme: {
            padding,
            background,
            width: { md },
        },
    }) => css`
        padding: ${padding.p1}px;
        background: ${background.lightBlue};
        width: ${md};
    `}
`;
