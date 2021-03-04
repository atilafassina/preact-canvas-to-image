import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Full Stack Social</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Avatar
                </Link>
                <Link activeClassName={style.active} href="/profile">
                    Projeto
                </Link>
            </nav>
        </header>
    );
};

export default Header;
