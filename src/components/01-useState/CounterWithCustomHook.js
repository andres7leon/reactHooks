import React from 'react'
import { UserCounter } from '../../hooks/userCounter'

export const CounterWithCustomHook = () => {

    const { state, incremet, decremet, reset } = UserCounter();

    return (
        <div>
            <h1> Counter with hook { state } </h1>
            <hr/>
            <button 
                className='btn btn-dark m-2'
                onClick={ () => incremet(3) }
                > +1 
            </button>
            <button 
                className='btn btn-dark m-2'
                onClick={ () => decremet(5) }
                > -1 </button>
            <button 
                className='btn btn-dark m-2'
                onClick={ reset }
                > Reset </button>
        </div>
    )
}
