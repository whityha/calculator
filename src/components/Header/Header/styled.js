import styled from 'styled-components';

export const WrapperHeader = styled.header`
    display: flex;
    grid-area: header;
    align-items: center;
`;

export const StyledTitle = styled.h2`
    text-shadow: 0px 0px 10px ${({ theme: { color } }) => color.primary};
    color: ${({ theme: { color } }) => color.primary};
    margin-right: auto;
`;

export const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    margin-right: 100px;
    li {
        color: ${({ theme: { color } }) => color.primary};
    }
`;
