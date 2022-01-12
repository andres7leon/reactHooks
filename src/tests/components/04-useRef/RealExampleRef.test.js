import React from 'react';
import {shallow} from 'enzyme'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('pruebas hook RealExampleRef', () => {
   
    const wrapper = shallow(<RealExampleRef />);

    test('debe de mostrarse bien ', () => {
       
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultiplesCustomshooks').exists() ).toBe(false);
        
    });
    
    test('debe de mostrar el compoente <multiplescustom', () => {
        
        wrapper.find('button').simulate('click');

        expect( wrapper.find('MultiplesCustomshooks').exists() ).toBe(true);
        
    });

});
