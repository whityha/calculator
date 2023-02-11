import { DRAW_HISTORY } from '@constants/options';
import styled from 'styled-components';

const StyledButton = styled.button`
    grid-area: ${({ area }) => area};
    border: 1px solid black;
    color: black;
    background: ${({ area }) => (DRAW_HISTORY.includes(area) ? '#f6be5a' : '')};
    cursor: pointer;
    font-size: 24px;
    &:focus-visible {
        outline: none;
    }
`;

export default StyledButton;
