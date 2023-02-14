import styled from 'styled-components';

const StyledButton = styled.button`
    padding: ${({
        theme: {
            padding: { p2, p3 },
        },
    }) => `${p2}px ${p3}px`};
    cursor: pointer;
    background: black;
    color: white;
`;

export default StyledButton;
