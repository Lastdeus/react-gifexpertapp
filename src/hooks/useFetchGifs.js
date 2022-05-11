import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // useEffect dispara evento en su primer argumento. el segundo argumento es una lista de dependencias(arreglo). Si pongo arreglo vacío solo se dispara 1 vez
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    });
            })
    },[category])


    return state;  //{data:[], loading: true};
  
}