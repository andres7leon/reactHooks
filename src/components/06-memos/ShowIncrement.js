import React from 'react'

export const ShowIncrement = React.memo(( {increment} ) => {
    console.log('me volvi a generar')
    return (
        <>
            <button className='btn btn-info' onClick={() => { increment( 5 ) }}>
                incrementar
            </button>   
        </>
    )
})
