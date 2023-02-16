import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: block;
    position: absolute;
    top: 5%;
    right: 5%;
    ${({ theme: { colorPrimary, fontSize } }) => css`
        font-size: ${fontSize.secondary}px;
        color: ${colorPrimary};
    `}
`;

export default Wrapper;
