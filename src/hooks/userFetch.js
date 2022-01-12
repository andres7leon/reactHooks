import { useEffect, useRef, useState } from "react"

export const UserFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState( { data: null, loading: true, error: null} );

    useEffect(() => {
    
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        fetch( url )
            .then( res => res.json())
            .then( data => {
                setTimeout( ()=> {
                    if ( isMounted.current ) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }
                }, 3500)
            })
            .catch( () => {
                setState({
                    loading: false,
                    error: 'No se pudo cargar la info',
                    data: null
                });
            })
    }, [url])

    return state;
}
