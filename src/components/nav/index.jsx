import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav>
        <div className="logo">
        <img src="/logo.svg" alt="logo" />
        </div>
      <ul>
        <li>
          <Link to="/">Jogadores</Link>
        </li>
        <li>
          <Link to="/">Compartilhar link do jogo</Link>
        </li>
        <li>
          <Link to="/game">Abir link do jogo</Link>
        </li>
        <li>
          <Link to="/login">Sair do jogo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
