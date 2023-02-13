import { DRAW_HISTORY } from '@constants/options';
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
        background: ${DRAW_HISTORY.includes(area) ? background.special : ''};
        font-size: ${fontSize.main}px;
    `};

    cursor: pointer;
    &:focus-visible {
        outline: none;
    }
`;

export default StyledButton;
