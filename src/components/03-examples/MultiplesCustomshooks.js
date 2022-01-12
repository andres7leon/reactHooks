import React from 'react'
import { UserCounter } from '../../hooks/userCounter';
import { UserFetch } from '../../hooks/userFetch'

export const MultiplesCustomshooks = () => {

    const {state:counter, incremet} = UserCounter(1);
    const {loading, data} = UserFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h3> BreakingBad </h3>
            <hr/>

            {
                loading 
                ? 
                ( 
                    <div className='alert alert-info text-center'>
                        loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{ quote }</p>
                        <small>{ author}</small>
                    </blockquote>
                )
            }

            <button className='btn btn-info' onClick={ () => incremet() }> Siguiente Frase </button>

        </div>
    )
}
