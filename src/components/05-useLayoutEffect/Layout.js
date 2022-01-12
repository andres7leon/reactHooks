import React, { useLayoutEffect, useRef } from 'react'
import { UserCounter } from '../../hooks/userCounter';
import { UserFetch } from '../../hooks/userFetch'
import './layout.css'
export const Layout = () => {

    const {state:counter, incremet} = UserCounter(1);
    const {loading, data} = UserFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    const { quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect())

        // return () => {
            
        // };
    }, [quote])

    return (
        <div>
            <h3> Layout </h3>
            <hr/>
               
            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag}>{ quote }</p>
            </blockquote>
                

            <button className='btn btn-info' onClick={ () => incremet() }> Siguiente Frase </button>

        </div>
    )
}
