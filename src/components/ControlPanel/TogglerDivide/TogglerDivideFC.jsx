import React from 'react';

import HiddenInput from '../HiddenInput/HiddenInputFC';

import { Label, StyledTogglerDivide } from './styled';

const TogglerDivide = () => (
    <StyledTogglerDivide>
        <Label htmlFor="divide">
            <HiddenInput id="divide" name="toggler" type="radio">
                /
            </HiddenInput>
        </Label>
        <Label htmlFor="remainder">
            <HiddenInput id="remainder" name="toggler" type="radio">
                %
            </HiddenInput>
        </Label>
    </StyledTogglerDivide>
);

export default TogglerDivide;
