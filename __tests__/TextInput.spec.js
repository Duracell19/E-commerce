import React from 'react';
import {shallow} from 'enzyme';
import SimpleTextInput from '../components/controls/simpleTextInput';

describe('SimpleTextInput', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow( <SimpleTextInput placeholder='Enter Email' />)
            expect(component).toMatchSnapshot()
        });
    });
});
