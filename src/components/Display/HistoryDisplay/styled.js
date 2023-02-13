import styled, { css } from 'styled-components';

const WrapperHistoryDisplay = styled.div`
    display: block;
    position: absolute;
    top: 5%;
    right: 5%;
    ${({ theme: { colors, fontSize } }) => css`
        font-size: ${fontSize.secondary};
        color: ${colors.lightGrey};
    `}
`;

export default WrapperHistoryDisplay;
