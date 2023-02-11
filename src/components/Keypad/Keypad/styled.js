import styled from 'styled-components';

const WrapperKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'bl br remainder divide'
        'seven eight nine multiply'
        'four five six minus'
        'one two three plus'
        'zero dot plusmn equal'
        'C C C C';
    grid-template-rows: 70px 70px 70px 70px 70px 70px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem;
`;

export default WrapperKeypad;
