import styled from 'styled-components';

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.main}px;
`;

export default Wrapper;
