import React, { useRef } from 'react'

export const FocusScreen = () => {


    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus screen</h1>

            <hr/>

            <input 
                ref={inputRef}
                className='form-control'
                placeholder='su nombre'
            />

            <button className='btn btn-info' onClick={ handleClick }>Focus</button>
        </div>
    )
}
