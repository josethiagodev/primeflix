import { useState } from 'react';
import { toast } from 'react-toastify';

import { auth } from '../../services/firebaseConnection';
import { 
    createUserWithEmailAndPassword 
} from 'firebase/auth';

import './register-account.css';


export default function RegisterAccount() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function registerAccountUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Usuário cadastrado com sucesso!")

            setEmail('')
            setPassword('')
        })
        .catch((error) => {
            // 'auth/' 
            if(error.code === 'auth/weak-password') {
                toast.warn("Sua senha é fraca, digite pelo menos seis caracteres.")
            } else if(error.code === 'auth/email-already-in-use' || 'auth/email-already-exists') {
                toast.warn("E-mail já existe, digite outro e-mail.")
            } else if(error.code === 'invalid-password') {
                toast.warn("Digite uma senha válida com pelo menos seis caracteres!")
            }
        })
    }


    return (
        <div className="register-account">

            <div className="container">

                <h1>Cadastre sua conta</h1>
                
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
                                onClick={registerAccountUser}
                            >
                                Cadastrar minha conta
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
}