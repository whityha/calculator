import styled from 'styled-components';

const WrapperDisplay = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-area: display;
    padding: 1rem 5%;
    position: relative;
    &:after {
        content: '';
        display: block;
        width: 90%;
        height: 2px;
        background: ${({ theme: { background } }) => background.secondary};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
`;

export default WrapperDisplay;
