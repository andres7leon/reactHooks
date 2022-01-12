import React from 'react';
import { shallow, mount } from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demosTodo } from '../../fixtures/demoTodos';
import {act} from '@testing-library/react'

describe('Pruebas en TodoApp', () => {
    
    const wrapper = shallow( <TodoApp />)

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrarse bien', () => {
       
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('debe de agregar un TODO', () => {
    
        const wrapper = mount(<TodoApp />);

        act( () => {

            wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodo[0] )
            wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodo[1] )

        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });
    
    test('debe de eliminar un TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodo[0] )
        wrapper.find('TodoListItem').prop('handleRemove')( demosTodo[0].id )
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (0)');
    });
    



});
