import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Compoennte montado')

        const mouseMove = () => {
            console.log('object')
        }

        window.addEventListener('mouseover', mouseMove)

        return () => {
            console.log('Compoennte desmontado')
            window.removeEventListener('mouseover', mouseMove)
        }
    }, [])

    return (
        <>
            <h3>Eres genial !!!</h3>   
            
        </>
    )
}
