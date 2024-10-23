import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


export default function MovieDetailPage(){

    const {id} = useParams()
    const [movie, setFilmes] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data =>  {setFilmes(data) 
                        console.log(data)
        })
        .catch(error => console.error(error))
      }, []);

    return(
        <>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}></img>     
        </>
    )
}