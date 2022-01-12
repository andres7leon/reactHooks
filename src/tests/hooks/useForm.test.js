import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en hook useForm', () => {
    
    const initialForm = {
        name: 'Andres',
        email: 'andres@7.com'
    };

    
    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );

        expect( result.current[0] ).toEqual( initialForm );
        expect( typeof result.current[1] ).toBe( 'function' );
        expect( typeof result.current[2] ).toBe( 'function' );

    });
    
    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {

            const data = {
                target: {
                    name: 'name',
                    value: 'Jhonatan'
                }
            }

            handleInputChange( data );
        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( {...initialForm, name: 'Jhonatan' } );
        
    });

    test('debe de re-estrablecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            const data = {
                target: {
                    name: 'name',
                    value: 'Jhonatan'
                }
            }

            handleInputChange( data );
            reset();

        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( initialForm );

    });

});
