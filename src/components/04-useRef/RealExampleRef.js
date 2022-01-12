import React, { useState } from 'react'
import { MultiplesCustomshooks } from '../03-examples/MultiplesCustomshooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1> RealExpample Ref</h1>
            <hr/>

            { show && <MultiplesCustomshooks />}

            <button
                className='btn btn-info mt-3'
                onClick={ () => {
                    setShow( !show )
                }}
                >
                    Show - hide
                </button>

        </div>
    )
}
