

    export const getGifs = async (category) => {
            
        const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=NI0IhrIVvLZJ2OsGF4j0y7bfaZCV1jdS`;
        const resp = await fetch( url );
        const {data} = await resp.json();
        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url, // el simbolo ? es opcional para decir que si vienen las imagenes lo utilice
            }
        })

        
        //console.log(gifs);
        return gifs;
    }
