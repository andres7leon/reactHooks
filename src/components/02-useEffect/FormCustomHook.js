import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={ handleSubmit }>
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
           
            <div className='form-group mt-3'>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button className='btn btn-success mt-5' type='submit' > Guardar </button>

        </form>
    )
}
