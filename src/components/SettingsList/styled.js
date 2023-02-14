import styled from 'styled-components';

const WrapperSettingsListFC = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.main}px;
`;

export default WrapperSettingsListFC;
