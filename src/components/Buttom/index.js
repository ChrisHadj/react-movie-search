import React from 'react';

import {Wrapper} from './Buttom.styles';

const Buttom = ({text, callback}) => (
    <Wrapper type="buttom" onClick={callback}>
        {text}
    </Wrapper>
)

export default Buttom;