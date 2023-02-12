import styled from 'styled-components';

export const WrapperSwitcher = styled.div`
    display: none;
    width: 50px;
    height: 20px;
    border-radius: 100px;
    background: ${({ theme: { background } }) => background.secondary};
    outline: 1px solid ${({ theme: { background } }) => background.border};
    cursor: pointer;
`;
export const Handler = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background: ${({ theme: { color } }) => color.secondary};
    float: ${({ position }) => (position === 'light' ? 'left' : 'right')};
`;
