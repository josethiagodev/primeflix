import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { auth } from '../../services/firebaseConnection';
import { 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth';

import './login-account.css';


export default function LoginAccount() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userData, setUserData] = useState(false);
    const [loggedUserDetails, setLoggedUserDetails] = useState({});


    async function loginAccountUser() {
        await signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
            toast.success("Você entrou na sua conta!")

            setLoggedUserDetails({
                uid: value.user.uid,
                email: value.user.email,
            })
            setUserData(true);

            setEmail('')
            setPassword('')
        })
        .catch((error) => {
            if(error.code === 'auth/missing-password') {
                toast.warn("Digite sua senha para entrar!")
            } else if(error.code === 'auth/invalid-password') {
                toast.warn("Senha inválida ou incorreta. Sua senha deve ter pelo menos seis caracteres.!")
            }
        })
    }


    async function logoutAccountUser() {
        await signOut(auth)
        .then((value) => {
            toast.success("Você saiu da sua conta!")
        })

        setUserData(false);
        setLoggedUserDetails({});
    }


    useEffect(() => {
        async function loginCheck() {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    // Se tiver usuário logado
                    console.log(user)
                    setUserData(true);
                    setLoggedUserDetails({
                        uid: user.uid,
                        email: user.email,
                    });
                } 
                
                else {
                    // Se não tiver usuário logado
                    setUserData(false);
                    setLoggedUserDetails({});
                }
            })
        }

        loginCheck();
    }, []);


    return (
        <div className="login-account">
            <div className="container">

                <h1>Entre na sua conta.</h1>
                
                <form className="form">
                    
                    <div className="row">
                        <div className="col">
                            <label>E-mail:</label>
                            <input 
                                placeholder="Digite seu e-mail" 
                                value={email} 
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>
                        <div className="col">
                            <label>Senha:</label>
                            <input 
                                placeholder="Digite sua senha" 
                                value={password} 
                                onChange={ (e) => setPassword(e.target.value) }
                            />
                        </div>
                    </div>
                    
                    <div className="btn-group">
                        <button 
                                type="button" 
                                className="btn register" 
                                onClick={loginAccountUser}
                            >
                                Entrar agora
                        </button>
                    </div>
                </form>

                {/* Mostrar dados quando usuário fazer login */}
                {userData && (
                    <div className="userLogged">
                        <div className="copy">
                            <h2>Seja muito bem vindo!</h2>
                            <p>Você entrou na sua conta da plataforma PrimeFlix.</p>
                        </div>
                        <ul className="list-user">
                            <li>Número ID: {loggedUserDetails.uid}</li>
                            <li>E-mail: {loggedUserDetails.email}</li>
                        </ul>
                        <div className="btn-group">
                            <button 
                                className="btn closed" 
                                onClick={logoutAccountUser}
                            >
                                Sair da conta
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}