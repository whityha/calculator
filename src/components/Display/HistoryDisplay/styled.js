import styled, { css } from 'styled-components';

const WrapperHistoryDisplay = styled.div`
    display: block;
    position: absolute;
    top: 5%;
    right: 5%;

    ${({
        theme: {
            settings: {
                font: { secondary },
                display: { displayHistoryColor },
            },
        },
    }) => css`
        font-size: ${secondary};
        color: ${displayHistoryColor};
    `}
`;

export default WrapperHistoryDisplay;
