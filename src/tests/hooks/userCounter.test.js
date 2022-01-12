import { renderHook, act } from '@testing-library/react-hooks';
import { UserCounter } from '../../hooks/userCounter';

describe('Preubas de userCounter', () => {
    
    test('Debe retornar valores por defecto', () => {
    
        const { result } = renderHook( () => UserCounter() );
        // console.log(result.current)

        expect( typeof result.current.incremet ).toBe('function');
        expect( typeof result.current.decremet ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
        expect( result.current.state ).toBe( 10 );
    });
    
    test('Debe retornar el valor de 100', () => {    
        const { result } = renderHook( () => UserCounter(200) );

        expect( result.current.state ).toBe( 200 );
    });

    test('Debe de incrementar', () => {    
        const { result } = renderHook( () => UserCounter(100) );
        const { incremet } = result.current;

        act( () => {
            incremet();
        });

        const { state } = result.current;
        expect( state ).toBe( 101 );

    });

    test('Debe decrementar', () => {    
        const { result } = renderHook( () => UserCounter(100) );
        const { decremet } = result.current;

        act( () => {
            decremet();
        });

        const { state } = result.current;
        expect( state ).toBe( 99 );

    });

    test('Debe hacer un reset', () => {    
        const { result } = renderHook( () => UserCounter(100) );
        const { decremet, reset } = result.current;

        act( () => {
            decremet();
            reset();
        });

        const { state } = result.current;
        expect( state ).toBe( 100 );

    });
    

});
