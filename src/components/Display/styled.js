import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-area: display;
    position: relative;
    padding: ${({
        theme: {
            padding: { p1, p4 },
        },
    }) => `${p1}px ${p4}px`};

    &:after {
        content: '';
        display: block;
        width: ${({ theme: { width } }) => width.lg};
        height: 2px;
        background: ${({ theme: { colorPrimary } }) => colorPrimary};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
`;

export const HistoryDisplay = styled.div`
    display: block;
    position: absolute;
    top: 5%;
    right: 5%;
    ${({ theme: { colorPrimary, fontSize } }) => css`
        font-size: ${fontSize.secondary}px;
        color: ${colorPrimary};
    `}
`;
