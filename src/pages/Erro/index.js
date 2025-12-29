import { Link } from 'react-router-dom';

import './erro.css';

export default function Erro() {
    return (
        <div className="not-found">
            <div className="content">
                <h1>Essa página não existe!</h1>
                <Link className="btn-notfound" to="/">Ir para os filmes</Link>
            </div>
        </div>
    );
}