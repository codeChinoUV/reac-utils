import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {

    const isMountedref = useRef(true);

    useEffect(() => {
        return () => {
            isMountedref.current = false;
        }
    }, []);

    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        setstate({
            data: null, loading: true, error: null
        });
        fetch(url)
            .then(respuesta => respuesta.json() )
            .then(data => {
                if(isMountedref.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( e => setstate({
                data: null,
                loading: false,
                error: 'Ocurrio un error'
            }));
    }, [url]);

    return state;
}
