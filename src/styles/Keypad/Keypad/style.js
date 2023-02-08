import styled from 'styled-components';

const StyledKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'C seven eight nine multiply'
        'minus four five six ${({ area }) => area}'
        'plus one two three equal'
        'dot bl zero br CE'
        'plusmn plusmn plusmn plusmn plusmn';
    grid-template-rows: 50px 50px 50px 50px 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
`;

export default StyledKeypad;
