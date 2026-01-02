import UseAnimations from "react-useanimations";
import heart from 'react-useanimations/lib/heart';

import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className="logotipo" to="/">PrimeFlix</Link>
            <Link className="btn-favorites" to="/favorites">
                <UseAnimations animation={heart} size={24} strokeColor="rgba(41, 224, 169, 1)" /> Favoritos
            </Link>
        </header>
    );
}