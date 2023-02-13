import styled from 'styled-components';

const WrapperDisplay = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-area: display;
    position: relative;
    padding: ${({
        theme: {
            padding: { p1, p4 },
        },
    }) => `${p1}px ${p4}px`};

    &:after {
        content: '';
        display: block;
        width: ${({ theme: { width } }) => width.lg};
        height: 2px;
        background: ${({ theme: { colorPrimary } }) => colorPrimary};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
`;

export default WrapperDisplay;
