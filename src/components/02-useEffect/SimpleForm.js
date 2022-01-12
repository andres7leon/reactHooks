import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('entraa si')
    }, [])

    useEffect( () => {
        // console.log('cambia el formulario')
    }, [formState])

    useEffect( () => {
        // console.log('cambia el name')
    }, [name])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    
    return (
        <>
            <h2> Use Effect </h2>   
            <hr/>

            <div className='form-group mt-3'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group mt-3'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="ejemplo@email.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message />}

        </>
    )
}
