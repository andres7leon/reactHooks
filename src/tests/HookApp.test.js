import React from 'react';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';


describe('se renderiza bien HookApp', () => {
    
    test('debe hacer match', () => {
        
        const wrapper = shallow( <HookApp /> );

        expect( wrapper ).toMatchSnapshot();

    });
    

});
