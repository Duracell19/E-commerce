import React from 'react';
import {shallow} from 'enzyme';
import OrderProductsRow from '../components/controls/myOrders/orderProductsRow';

describe('OrderProductsRow', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow( <OrderProductsRow product={{'name':'122','thumb':'123'}} />)
            expect(component).toBeTruthy()
        });
    });
  });
