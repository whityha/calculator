import React from 'react';
import { useDispatch } from 'react-redux';
import { clearHistory } from '@actions/display';

import Button from './styled';

const ClearButton = () => {
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearHistory());
    };
    return (
        <Button type="button" onClick={handleClear}>
            CLEAR HISTORY
        </Button>
    );
};

export default ClearButton;
