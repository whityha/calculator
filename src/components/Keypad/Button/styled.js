import { DRAW_HISTORY_BUTTONS } from '@constants/options';
import styled from 'styled-components';

const StyledButton = styled.button`
    grid-area: ${({ area }) => area};
    border: 1px solid black;
    color: black;
    background: ${({ area }) =>
        DRAW_HISTORY_BUTTONS.includes(area) ? '#f6be5a' : ''};
    cursor: pointer;
    font-size: 24px;
    &:focus-visible {
        outline: none;
    }
    &:active {
        background-color: white;
    }
`;

export default StyledButton;
