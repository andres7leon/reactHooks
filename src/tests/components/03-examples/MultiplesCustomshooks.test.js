import React from 'react';
import {shallow} from 'enzyme'
import { MultiplesCustomshooks } from '../../../components/03-examples/MultiplesCustomshooks';
import { UserFetch } from '../../../hooks/userFetch';
import { UserCounter } from '../../../hooks/userCounter';

jest.mock( '../../../hooks/userFetch' );
jest.mock( '../../../hooks/userCounter' );


describe(' Pruebas en hook MultiplesCustomshooks', () => {

    beforeEach( () =>  {
        UserCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    test('Debe de mostrarse correctamente', () => {
       
        UserFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultiplesCustomshooks />);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de de mostrar la informacion', () => {
       
        UserFetch.mockReturnValue({
            data: [
                {
                    author: 'Andres',
                    quote: 'seeeeeee'
                }
            ],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultiplesCustomshooks />);

        expect( wrapper.find('small').text().trim() ).toBe('Andres');
        expect( wrapper.find('p').text().trim() ).toBe('seeeeeee');
        
    });
    
    
});
