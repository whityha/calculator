import styled, { css } from 'styled-components';

const WrapperKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    ${({
        theme: {
            settings: {
                keypad: {
                    area,
                    rows,
                    rowHeight,
                    columns,
                    columnWidth,
                    padding,
                },
            },
        },
    }) => css`
        grid-template-areas: ${area};
        grid-template-rows: ${Array(rows).fill(rowHeight).join(' ')};
        grid-template-columns: ${Array(columns).fill(columnWidth).join(' ')};
        padding: ${padding};
    `};
`;

export default WrapperKeypad;
