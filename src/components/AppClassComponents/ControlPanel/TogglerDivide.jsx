import {
    StyledLabel,
    StyledTogglerDivide,
} from '@styles/ControlPanel/TogglerDivide/style';
import React from 'react';

import InputRadio from './InputRadio';

class TogglerDivide extends React.PureComponent {
    render() {
        return (
            <StyledTogglerDivide>
                <StyledLabel htmlFor="divide">
                    <InputRadio id="divide" name="toggler" type="radio">
                        /
                    </InputRadio>
                </StyledLabel>
                <StyledLabel htmlFor="remainder">
                    <InputRadio id="remainder" name="toggler" type="radio">
                        %
                    </InputRadio>
                </StyledLabel>
            </StyledTogglerDivide>
        );
    }
}

export default TogglerDivide;
