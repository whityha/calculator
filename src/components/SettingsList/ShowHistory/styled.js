import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;

export const Label = styled.label`
    ${({ theme: padding }) => css`
        padding: ${padding.p2}px;
    `}
`;

export const Input = styled.input`
    margin-left: ${({ theme: { margin } }) => margin.m2}px;
`;
