import React, { useState } from 'react'
import {UserCounter} from '../../hooks/userCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {state:counter, incremet} = UserCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter <Small value={ counter }/></h1>
            <hr/>

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
