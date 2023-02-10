import React from 'react';

import HiddenInput from '../HiddenInput/HiddenInputCC';

import { StyledLabel, StyledTogglerDivide } from './styled';

class TogglerDivide extends React.PureComponent {
    render() {
        return (
            <StyledTogglerDivide>
                <StyledLabel htmlFor="divide">
                    <HiddenInput id="divide" name="toggler" type="radio">
                        /
                    </HiddenInput>
                </StyledLabel>
                <StyledLabel htmlFor="remainder">
                    <HiddenInput id="remainder" name="toggler" type="radio">
                        %
                    </HiddenInput>
                </StyledLabel>
            </StyledTogglerDivide>
        );
    }
}

export default TogglerDivide;
