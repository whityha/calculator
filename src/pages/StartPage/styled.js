import styled from 'styled-components';

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    gap: 4rem;
    align-items: center;
    background: #fff
    height: 100vh;
    color: ${({ color }) => color};
`;

const StyledButtonsBlock = styled.div`
    display: flex;
    gap: 2rem;
`;

export { StyledButtonsBlock, StyledPage };
