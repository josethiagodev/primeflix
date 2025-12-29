import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className="logotipo">PrimeFlix</Link>
            <Link className="favorites" to="/favorites">Favoritos</Link>
        </header>
    );
}