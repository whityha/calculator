import styled from 'styled-components';

const StyledButton = styled.button`
    padding: ${({
        theme: {
            padding: { p2, p3 },
        },
    }) => `${p2} ${p3}`};
    cursor: pointer;
    background: black;
    color: white;
`;

export default StyledButton;
