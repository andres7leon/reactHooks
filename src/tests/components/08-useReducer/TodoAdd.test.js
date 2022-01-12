import React from 'react';
import {shallow} from 'enzyme'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas en TodoAdd', () => {
    
    const handleAddTodo = jest.fn(); 

    const wrapper = shallow( <TodoAdd handleAddTodo={handleAddTodo} />)

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('No debe de llamar AddTODO', () => {
       
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
        
    });
    
    test('Debe de llamar la funcion handleAddTODO', () => {
        
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'Aprender Ingles', name: 'description'}})

        const formSubmit = wrapper.find('form').prop('onSubmit');
    
        formSubmit({ preventDefault(){} });
    
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: 'Aprender Ingles',
            done: true
        });

        expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
    
    
});
