import { useState } from "react";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){
{
    /*
    const [contador, setContador] = useState(1100)
    const [textoBotao, setTextoBotao] = useState("Memphis")

    const handleClick = () => {
        setContador((count) => count + 1)
        console.log(contador)
    }

    const handleClick2 = () => {
        setContador((count) => count - 1)
        console.log(contador)
    }

    const handleClick0 = () => {
        setContador(0)
    }

    const handleBotao = () =>{
        setTextoBotao(count =>(
            count === "Memphis" ? "Depay" : "Memphis"
        ))
    }
*/}
    const [search, setSearch] = useState('')

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

    const filmesFiltrados = movies.filter( filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
        <h2>Veja a lista completa de filmes</h2>
        <input className="text-black" type="text" name="search" id="search" value={search} onChange={handleSearch}/>

        <div className="flex">
        {
            filmesFiltrados.length > 0 ?
            filmesFiltrados
            .map(movie =>(
                <MovieCard key={movie.id} {...movie}/>
            ))
            :
            <p>Filme não encontrado</p>
        }
        </div>
        {/*<p>{Math.random() * 101}</p>
        <p>{contador}</p>
        <button onClick={handleClick}>Aumentar</button>
        <button onClick={handleClick2}>Diminuir</button>
        <button onClick={handleClick0}>Zerar</button>
        <button onClick={handleBotao}>{textoBotao}</button>
        */}
        </>
    )
}