import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';
import './movie.css';

export default function Movie() {
    const { id } = useParams();
    const navigation = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "3a8e633fba7efeb3a36d0d4cdeb38a26",
                    language: "pt-BR",
                    // append_to_response: 20,
                }
            })
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("FILME NÃO ENCONTRADO");
                navigation("/", {
                    replace: true,
                });
                return;
            })
        }

        loadMovie();

        return () => {
            console.log("COMPONENTE DESMONTADO");
        }
    }, [navigation, id]);


    // Function Save Movie
    function handleSaveMovies() {
        // Recupera itens armazenados no local storage para serem usados na const 'myList'
        // Passa o nome da chave para o método getItem()
        const myList = localStorage.getItem("@primeflixfavorites");

        // 1. Transformando a lista em JSON (string)
        // 2. Buscando dados na lista, se não existir nada, será uma lista vazia
        let savedMovies = JSON.parse(myList) || [];

        const hasMovies = savedMovies.some( (moviesSave) => moviesSave.id === movie.id);

        // Se não encontrar nenhum filme pelo 'id', salva na const 'hasMovie'
        if(hasMovies) {
            alert("ESSE FILME JÁ TEM NA LISTA");
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem( "@primeflixfavorites", JSON.stringify(savedMovies) );
        alert("FILME SALVO COM SUCESSO!");

    }


    if(loading) {
        return(
            <div className="movie-info">
                <p>Carregando detalhes do filme!</p>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="movie-details">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                <div className="info">
                    <div className="copy">
                        <h2>{movie.title}</h2>
                        <span className="assessment">Avaliação: <strong>{movie.vote_average} /10</strong></span>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="btn-group">
                        <button className="btn-save" onClick={handleSaveMovies}>Salvar</button>
                        <button className="btn-video">
                            <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                                Trailer
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}