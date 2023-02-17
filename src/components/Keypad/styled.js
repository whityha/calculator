import { DRAW_HISTORY_BUTTONS } from '@constants/options';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'bracketLeft bracketRight remainder divide'
        'seven eight nine multiply'
        'four five six minus'
        'one two three plus'
        'zero dot plusmn equal'
        'C C C C';
    ${({
        theme: {
            height: { md },
            padding: { p2 },
            gridSizes: { xsm },
        },
    }) => css`
        grid-template-rows: repeat(6, ${md}px);
        grid-template-columns: repeat(4, ${xsm});
        padding: ${p2}px;
    `};
`;

export const Button = styled.button`
    ${({
        area,
        theme: {
            fontSize,
            colors,
            background,
            border: { original },
        },
    }) => css`
        grid-area: ${area};
        color: ${colors.black};
        border: ${original};
        background: ${DRAW_HISTORY_BUTTONS.includes(area)
            ? background.orange
            : ''};
        font-size: ${fontSize.main}px;
    `};
    cursor: pointer;
    &:focus-visible {
        outline: none;
    }
    &:active {
        background-color: white;
    }
`;
