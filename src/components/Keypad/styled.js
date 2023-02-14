import styled, { css } from 'styled-components';

const WrapperKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'bl br remainder divide'
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

export default WrapperKeypad;
