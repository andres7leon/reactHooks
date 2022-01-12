import React from 'react';
import {mount} from 'enzyme'
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas componente AppRouter', () => {

    const user = {
        id: 1,
        name: 'andres'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('debe de mostrarse bien ', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    

});

