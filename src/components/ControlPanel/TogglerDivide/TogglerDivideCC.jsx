import React from 'react';

import HiddenInput from '../HiddenInput/HiddenInputCC';

import { Label, StyledTogglerDivide } from './styled';

class TogglerDivide extends React.Component {
    render() {
        return (
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
    }
}

export default TogglerDivide;
