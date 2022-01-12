import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demosTodo } from "../../fixtures/demoTodos";



describe('Pruebas en hook todoReducer', () => {
   
    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer( demosTodo, {});
        expect( state ).toEqual(demosTodo);

    });
    
    test('debe agregar un TODO', () => {
        
        const payload = {
            id: 3,
            desc: 'Aprender NodeJs',
            done: true
        }

        const action = {
            type: 'add',
            payload
        };

        const state = todoReducer( demosTodo, action);
        
        expect( state.length ).toEqual(3);
        expect( state ).toEqual( [...demosTodo, payload] );
        
    });
    
    test('debe de borrar un TODO', () => {
        
        const action = {
            type: 'remove',
            payload: 1
        }; 
        
        const state = todoReducer( demosTodo, action);

        expect( state.length ).toEqual(1);
        expect( state[0] ).toEqual(demosTodo[1]);
        
    });
    
    test('debe de hacer el Toggle del todo', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }; 
        
        const state = todoReducer( demosTodo, action);
        
        expect( state.length ).toEqual(2);
        expect( state[0].done ).toBe(true);
        
    });
    
    
    

});
