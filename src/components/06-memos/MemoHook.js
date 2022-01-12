import React, { useMemo, useState } from 'react'
import {UserCounter} from '../../hooks/userCounter'

export const MemoHook = () => {

    const {state:counter, incremet} = UserCounter(5000);
    const [show, setShow] = useState(true);

    const procesoPesado = ( iteraciones ) => {

        for (let i = 0; i < iteraciones; i++) {
            console.log('proceso pesado')            
        }

        return `${ iteraciones } iteraciones realizadas`
    };

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>CounterHook - {counter }</h1>
            <hr/>

            <p> memoProcesoPesado </p>

            <button
                className='btn btn-info mt-3'
                onClick={ () => incremet(1) }
                >
                    +1
            </button>

            <button
                className='btn btn-info mt-3'
                onClick={ () => setShow( !show ) }>
                    Show/hide - { JSON.stringify( show ) }
            </button>
        </div>
    )
}
