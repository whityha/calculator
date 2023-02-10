import React from 'react';

import StyledButton from './styled';

const Button = ({ children, area, onClick, name }) => (
    <StyledButton area={area} name={name} type="button" onClick={onClick}>
        {children}
    </StyledButton>
);

export default React.memo(Button);
