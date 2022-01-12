import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button className='btn btn-info' onClick={ () => { setUser({id:123, name:'andres'})}}>
                Login
            </button>
        </div>
    )
}
