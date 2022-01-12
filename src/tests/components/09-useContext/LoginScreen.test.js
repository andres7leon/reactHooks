import React from 'react';
import {mount} from 'enzyme'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen', () => {
   

    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{ setUser }} >
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe de mostrarse bien', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de ejecutar el setuser con el argumento esperado', () => {
       
        wrapper.find('button').simulate('click');

        expect( setUser ).toHaveBeenCalledWith({id:123, name:'andres'})
        
    });
    
    
    
});
