import UseAnimations from "react-useanimations";
import heart from 'react-useanimations/lib/heart';

import { Link } from 'react-router-dom';

import './style.css';

export default function Header() {
    return (
        <header>
            <Link className="logotipo" to="/">PrimeFlix</Link>
            
            <div className="links">
                <Link className="btn-link" to="/">Home</Link>
                <Link className="btn-link" to="/blog">Blog</Link>
            </div>

            <div className="btn-group">
                <Link className="btn favorites" to="/favorites">
                    <UseAnimations animation={heart} size={24} strokeColor="rgba(41, 224, 169, 1)" /> 
                    Favoritos
                </Link>
                <Link className="btn login" to="/loginAccount">
                    Entrar
                </Link>
                <Link className="btn register" to="/registerAccount">
                    Cadastrar
                </Link>
            </div>
        </header>
    );
}