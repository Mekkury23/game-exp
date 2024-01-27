import { Link } from 'react-router-dom';
import './index.css';
import StartupColumn from '../../components/startup-profile';
import MarketProductColumn from '../../components/market-product-column';
import MainProduct from '../../components/main-product';
import PhasesColumn from '../../components/phases-column';
import AccountingColumn from '../../components/accounting';

const Game = () => {
  return (
    <div className='body'>
        <Link to='/' className='back'>Voltar para o painel de controle</Link>
        <div className='main'>
            <div className='game-left-column'>
            <StartupColumn />
            <div className='market-product-container'>
            <MarketProductColumn />
            <MarketProductColumn />
            </div>
            </div>
        <div className='blocks'> 
            <MainProduct />
        </div>
        <div className='right-side'>
        <PhasesColumn />
        <AccountingColumn />
        </div>
        </div>

    </div>
  );
}

export default Game;
