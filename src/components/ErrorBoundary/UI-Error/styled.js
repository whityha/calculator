import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.h1`
    color: ${({ theme: { colorPrimary } }) => colorPrimary};
`;

export const Description = styled.h2`
    color: ${({ theme: { colorPrimary } }) => colorPrimary};
`;
