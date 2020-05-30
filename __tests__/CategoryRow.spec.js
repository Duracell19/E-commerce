import React from 'react';
import {shallow} from 'enzyme';
import CategoryRow from '../components/controls/MyProfile/categoryRow';

describe('CategoryRow', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow( <CategoryRow item={{'thumb':'123'}} />)
            expect(component).toBeTruthy()
        });
    });
  });
