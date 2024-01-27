import { Link } from "react-router-dom";
import "./App.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <div>
          <span className="headline">Hora de Jogar!</span>
          <span className="subheadline">Startup ideia</span>
          <p>Você está prestes a se juntar ao jogo</p>
          <div className="form">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <p>Deve ter entre 4 a 20 caracteres</p>
            <Link className="button" to='/'>Jogar</Link>
          </div>
          <p>
            Ao participar desta sessão você concorda com os nossos termos de uso
          </p>
          <p>&copy;2024 startup ideia. Todos os direitos reservados</p>
        </div>
        <div>
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
            </div>
            </div>
      </div>
    </>
  );
}

export default Login;
