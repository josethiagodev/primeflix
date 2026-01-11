import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import UseAnimations from "react-useanimations";
import trash2 from 'react-useanimations/lib/trash2';

import { db } from '../../services/firebaseConnection';
import { 
    doc, 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc,
    onSnapshot
} from 'firebase/firestore';

import './posts.css';


export default function Posts() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const [idPost, setIdPost] = useState('');

    const [posts, setPosts] = useState([]);


    // Buscando todas postagens em tempo real com 'onSnapshot' no 'Cloud Firestore Database'
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
            let listPosts = [];

            snapshot.forEach((doc) => {
                listPosts.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    author: doc.data().author,
                });
            });

            setPosts(listPosts);
        }, (error) => {
            console.log("Erro ao buscar postagens em tempo real:", error);
            toast.warn("Erro ao buscar postagens!");
        });

        // Limpar o listener quando o componente desmontar
        return () => unsubscribe();
    }, []);


    // Cadastrar postagem no 'Cloud Firestore Database'
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
            toast.error("Erro ao cadastrar sua postagem!");
        })
    }


    // Buscar uma postagem no 'Cloud Firestore Database'
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


    // Buscando todas postagens no 'Cloud Firestore Database'
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
        .catch(() => {
            toast.warn("Erro ao buscar postagens!");
        })
    }


    // Atualizando postagem no 'Cloud Firestore Database'
    async function handleUpdatedPost(e) {
        e.preventDefault();

        const docRef = doc(db, "posts", idPost);

        await updateDoc(docRef, {
            title: title,
            description: description,
            author: author
        })
        .then(()=> {
            toast.success("Postagem atualizada com sucesso!");
            setIdPost('');
            setTitle('');
            setDescription('');
            setAuthor('');
        })
        .catch(() => {
            toast.warn("Erro ao atualizar a postagem!");
        })
    }


    // Excluindo postagem no 'Cloud Firestore Database'
    async function deletePost(id) {
        const docRef = doc(db, "posts", id);

        await deleteDoc(docRef)
        .then(() => {
            // A lista será atualizada automaticamente pelo onSnapshot
            toast.success("Postagem excluída com sucesso!");
        })
        .catch(() => {
            toast.warn("Erro ao excluir essa postagem:");
        })
    }


    return (
        <div className="container">

            <h1>Cadastre sua postagem.</h1>

            <div className="register-posts">
                <form className="content">
                    <div className="row">
                        <label>ID da postagem:</label>
                        <input 
                            placeholder="Digite ID da postagem..." 
                            value={idPost} 
                            onChange={ (e) => setIdPost(e.target.value) }
                        />
                    </div>
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
                        <button 
                            type="button" 
                            className="btn updated" 
                            onClick={handleUpdatedPost}>
                                Atualizar postagem
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
                            <span>
                                <button 
                                    className="btn delete" 
                                    onClick={ () => deletePost(post.id) }>
                                        <UseAnimations animation={trash2} size={20} strokeColor="rgba(234, 133, 143, 1)" />
                                        Excluir
                                </button>
                            </span>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}