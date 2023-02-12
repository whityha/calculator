import { DRAW_HISTORY } from '@constants/options';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    ${({
        area,
        theme: {
            settings: {
                font: { main },
                keypad: { buttonColor, buttonBorder, buttonSpecialBG },
            },
        },
    }) => css`
        grid-area: ${area};
        color: ${buttonColor};
        border: ${buttonBorder.join(' ')};
        background: ${DRAW_HISTORY.includes(area) ? buttonSpecialBG : ''};
        font-size: ${main};
    `};

    cursor: pointer;
    &:focus-visible {
        outline: none;
    }
`;

export default StyledButton;
