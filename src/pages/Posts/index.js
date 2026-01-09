import { useState } from 'react';
import { toast } from 'react-toastify';

import { db } from '../../services/firebaseConnection';
import { collection, addDoc, getDocs } from 'firebase/firestore';


import './posts.css';

export default function Posts() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const [posts, setPosts] = useState([]);


    // Cadastrar postagem no 'Database Firestore (Firebase)'
    async function handleRegisterPost(e) {
        e.preventDefault();
        
        await addDoc(collection(db, "posts"), {
            title: title,
            description: description,
            author: author
        })
        .then(() => {
            toast.success("Postagem cadastrada com sucesso!");
            
            setTitle('');
            setDescription('');
            setAuthor('');
        })
        .catch((error) => {
            console.log("ERRO " + error);
        })
    }


    // Buscar uma postagem no 'Database Firestore (Firebase)'
    // async function handleSearchPost(e) {
    //     e.preventDefault();

    //     const postRef = doc(db, "posts", "CGVlzxaJJEqSDw126bBO")

    //     // Buscando um documento dentro do 'post'
    //     await getDoc(postRef)
    //     .then((snapshot) => {
    //         if (snapshot.exists()) {
    //             const data = snapshot.data();
    //             setTitle(data.title);
    //             setDescription(data.description);
    //             setAuthor(data.author);
    //             toast.success("Postagem encontrada com sucesso!");
    //         } else {
    //             toast.warning("Postagem não encontrada no banco de dados!");
    //         }
    //     })
    //     .catch((error) => {
    //         toast.error("Erro ao buscar postagem!");
    //     })
    // }


    // Buscando todas postagens no 'Database Firestore (Firebase)'
    async function handleSearchMultiplePosts(e) {
        e.preventDefault();

        const manyPostsRef = collection(db, "posts")

        await getDocs(manyPostsRef)
        .then((snapshot) => {
            let listPosts = [];

            snapshot.forEach((doc) => {
                listPosts.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    author: doc.data().author,
                })
            })

            setPosts(listPosts);
        })
        .catch((error) => {
            toast.warn("Erro ao buscar postagens!");
        })
    }


    return (
        <div className="container">

            <h1>Cadastre sua postagem.</h1>

            <div className="register-posts">
                <form className="content">
                    <div className="row">
                        <label>Nome do autor:</label>
                        <input 
                            type="text" 
                            placeholder="Digite seu nome..." 
                            value={author} 
                            onChange={ (e) => setAuthor(e.target.value) }
                        />
                    </div>
                    <div className="row">
                        <label>Título:</label>
                        <input 
                            type="text" 
                            placeholder="Digite o título da postagem..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value) }
                        />
                    </div>
                    <div className="row">
                        <label>Descrição da postagem:</label>
                        <textarea 
                            type="text" 
                            placeholder="Digite a descrição da postagem..." 
                            rows="4" 
                            cols="30"
                            value={description} 
                            onChange={ (e) => setDescription(e.target.value) }
                        />
                    </div>
                    
                    <div className="btn-group">
                        <button 
                            type="button" 
                            className="btn register" 
                            onClick={handleRegisterPost}>
                                Cadastrar postagem
                        </button>
                        <button 
                            type="button" 
                            className="btn search" 
                            onClick={handleSearchMultiplePosts}>
                                Buscar postagem
                        </button>
                    </div>
                </form>
            </div>

            {/* Lista das Postagens */}
            <ul className="list-posts">
                {posts.map( (post) => {
                    return(
                        <li key={post.id}>
                            <span>{post.id}</span>
                            <span>{post.title}</span>
                            <span>{post.description}</span>
                            <span>{post.author}</span>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}