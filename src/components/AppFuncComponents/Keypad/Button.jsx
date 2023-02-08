import React from 'react';
import StyledButton from '@styles/Keypad/Button/style';

const Button = ({ children, area, onClick, name }) => {
    return (
        <StyledButton area={area} name={name} type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default React.memo(Button);
