import { DRAW_HISTORY_BUTTONS } from '@constants/options';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
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
            ? background.special
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

export default StyledButton;
