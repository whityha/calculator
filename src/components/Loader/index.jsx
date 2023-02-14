import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import WrapperLoader from './styled';

const Loader = () => (
    <WrapperLoader>
        <BeatLoader />
    </WrapperLoader>
);

export default Loader;
