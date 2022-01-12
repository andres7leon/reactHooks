import {renderHook} from '@testing-library/react-hooks'
import { UserFetch } from '../../hooks/userFetch';

describe('Pruebas en hook userFetch', () => {
   
    test('debe de retornar la informacion por defecto', () => {

        const { result } = renderHook( () => UserFetch('https://www.breakingbadapi.com/api/quotes/1'));

        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);

    });

    test('debe de tener la info correcta', async() => {
       
        const { result, waitForNextUpdate } = renderHook( () => UserFetch('https://www.breakingbadapi.com/api/quotes/1'));

        await waitForNextUpdate({timeout: 5000});

        const { data, loading, error } = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe(false);
        expect( error ).toBe(null);
        
    });

    test('debe de manejar el error', async() => {
       
        const { result, waitForNextUpdate } = renderHook( () => UserFetch('https://www.breakingbadapi.com/api/eequotes/1'));

        await waitForNextUpdate({timeout: 5000});

        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( error ).toBe('No se pudo cargar la info');
        
    });
    
    
    
});
