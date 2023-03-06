import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.main}px;
`;

const generalStyle = `
    color: ${({ theme: { colorSecondary } }) => colorSecondary};
    margin: 0 auto;
`;
export const Title = styled.h1`
    ${generalStyle}
`;

export const Description = styled.h2`
    ${generalStyle}
`;

export const Details = styled.p`
    color: ${({ theme: { colorSecondary } }) => colorSecondary};
`;
