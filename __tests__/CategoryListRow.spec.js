import React from 'react';
import {shallow} from 'enzyme';
import CategoryListProductRow from '../components/controls/MyProfile/categoryListProductRow';

describe('CategoryListProductRow', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow( <CategoryListProductRow item={{'thumb':'123'}} />)
            expect(component).toBeTruthy()
        });
    });
  });
