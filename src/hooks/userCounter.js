import { useState } from "react"

export const UserCounter = ( initialState = 10 ) => {

    const [state, setState] = useState(initialState);


    const incremet = ( factor = 1) => {
        setState( state + factor);
    }

    const decremet = ( factor = 1) => {
        setState( state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        incremet,
        decremet,
        reset
    }
}
