import styled from 'styled-components';

const StyledButton = styled.button`
    grid-area: ${({ area }) => area};
    color: black;
    cursor: pointer;
    font-size: 1.3rem;
`;

export default StyledButton;
