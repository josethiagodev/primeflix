import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=3a8e633fba7efeb3a36d0d4cdeb38a26&language=pt-BR
// https://api.themoviedb.org/3/movie/popular?api_key=3a8e633fba7efeb3a36d0d4cdeb38a26&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

});

export default api;