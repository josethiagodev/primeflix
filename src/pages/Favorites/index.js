import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import UseAnimations from "react-useanimations";
import visibility2 from 'react-useanimations/lib/visibility2';
import trash2 from 'react-useanimations/lib/trash2';

import './favorites.css';

export default function Favorites() {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        // Recupera itens armazenados no local storage para serem usados na const 'myList'
        const myList = localStorage.getItem("@primeflix");

        // Convertendo a lista de 'String' para 'Array' + Se não existir dados, continua como um 'Array' vázio
        setMovies( JSON.parse(myList) || [] )


    }, [])


    // Function Excluir Filme
    function handleDeleteMovie(id) {
        let filterMovies = movies.filter( (item) => {
            // Excluindo filmes do 'item.id' que são diferentes do 'id'
            return (item.id !== id)
        })

        setMovies(filterMovies);

        // Salvando dados sem o filme que foi excluido + Convertendo dados que era 'Array' para 'String'
        localStorage.setItem( "@primeflix", JSON.stringify(filterMovies) )

        toast.success("Filme removido com sucesso!");
    }


    return (
        <div className="container">
            <div className="favorites">
                <h1>Meus filmes favoritos</h1>

                { movies.length === 0 && <div className="notSaveMovie"><p>Você não tem nenhum filme salvo nos favoritos!</p></div> }

                <ul>
                    {movies.map((movie) => {
                        return (
                            <li className="card" key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                                <div className="info">
                                    <div className="copy">
                                        <h2>{movie.title}</h2>
                                    </div>
                                    <div className="btn-group">
                                        <Link to={`/filme/${movie.id}`} className="btn details">
                                            <span className="align">
                                                <UseAnimations animation={visibility2} size={23} strokeColor="rgba(255, 255, 255, 1)" /> Ver detalhes
                                            </span>
                                        </Link>
                                        <button className="btn delete" onClick={ () => handleDeleteMovie(movie.id) }>
                                            <span className="align">
                                                <UseAnimations animation={trash2} size={22} strokeColor="rgba(234, 133, 143, 0.75)" /> Excluir filme
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}