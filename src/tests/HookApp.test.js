import React from 'react';
import { shallow } from 'enzyme';

import { HookApp } from '../HookApp';

describe('Tests in HookApp', () => {

    const wrapper = shallow( <HookApp /> );

    test('should render', () => {
        expect( wrapper ).toMatchSnapshot();
    });

});