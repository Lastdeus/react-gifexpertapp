import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
 
export const GifGrid = ({ category }) => {

const {data, loading} = useFetchGifs(category);


    return (
        <>
            <h3> { category } </h3>
            
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">

                    {
                            data.map( (img)   => (
                                <GifGridItem
                                    key = {img.id}
                                    {...img}
                                />
                        ))
                    }

            </div>
        </>
    )
}


//<li key={id}>    <img src={url}></img>  </li>


//NI0IhrIVvLZJ2OsGF4j0y7bfaZCV1jdS