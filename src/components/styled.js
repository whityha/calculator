import styled from 'styled-components';

const StyledApp = styled.div`
    height: 100vh;
    background: ${({ theme: { backgroundPrimary } }) => backgroundPrimary};
`;

export default StyledApp;
