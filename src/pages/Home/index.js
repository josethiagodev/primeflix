import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UseAnimations from "react-useanimations";
import visibility from 'react-useanimations/lib/visibility';

import api from '../../services/api';
import './home.css';

// https://api.themoviedb.org/3/movie/now_playing?api_key=3a8e633fba7efeb3a36d0d4cdeb38a26&language=pt-BR
// https://api.themoviedb.org/3/movie/popular?api_key=3a8e633fba7efeb3a36d0d4cdeb38a26&language=pt-BR
// https://developer.themoviedb.org/docs/image-basics

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovies() {
            // Buscando filmes da API + Esperando a requisição acabar
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: process.env.REACT_APP_TMDB_API_KEY,
                    language: "pt-BR",
                    page: 1,
                }
            });

            setMovies( response.data.results.slice(0, 10) );

            setLoading(false);
        }

        loadMovies();

    }, []);


    // LOADING
    if(loading) {
        return (
            <div className="loading">
                <h4>Carregando filmes...</h4>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="movies-list">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <div className="copy">
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                                <div className="btn-group">
                                    <Link to={`/movie/${movie.id}`} className="btn-view">
                                        <UseAnimations animation={visibility} size={24} strokeColor="rgba(41, 224, 169, 1)" /> Ver filme
                                    </Link>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}