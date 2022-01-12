import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demosTodo } from '../../fixtures/demoTodos';

describe('Pruebas Hook TodoListItem', () => {
    
    const handleRemove = jest.fn();
    const handleToggle = jest.fn();
    let wrapper = shallow( <TodoListItem todos={demosTodo} handleToggle={handleToggle} handleRemove={handleRemove} /> );

    test('debe de mostrarse bien', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de correr la funcion de handleRemove', () => {
        const button = wrapper.find('button').at(0);
        button.simulate('click');
        expect( handleRemove ).toHaveBeenCalledWith( 1 );
    });
    
    test('debe de mostrarse el texto correctamente', () => {
        
        const p = wrapper.find('p').at(0);

        expect( p.text() ).toBe( `${demosTodo[0].id}.  ${demosTodo[0].desc}`)

    });

    test('se debe de completar', () => {
        
        demosTodo[0].done = true  

        wrapper = shallow( <TodoListItem todos={demosTodo} /> );
        
        const todoOk = wrapper.find('p').at(0).props().style?.textDecoration;

        expect( todoOk ).toBe('line-through');

    });
    

});
