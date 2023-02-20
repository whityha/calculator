import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${({ theme: { width } }) => width.large};
`;

const Title = styled.h1`
    color: ${({ colorPrimary }) => colorPrimary};
    padding-top: ${({ theme: { padding } }) => padding.p4}px;
    text-align: center;
`;

export { Title, Wrapper };
