import { useEffect, useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    // const { name } = values;


    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }
    
    // useEffect(() => {
    //     console.log('entra efectos')
    // })

    return [ values, handleInputChange, reset ]
}
