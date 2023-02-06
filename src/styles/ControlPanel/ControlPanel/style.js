import styled from 'styled-components';

export const StyledControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: controls;
    border-left: 2px solid
        ${({ theme: { background } }) => background.secondary};
    border-right: 2px solid
        ${({ theme: { background } }) => background.secondary};
    padding: 1rem;
    gap: 2rem;
`;

export const Title = styled.h1`
    color: ${({ theme: { color } }) => color.primary};
`;
