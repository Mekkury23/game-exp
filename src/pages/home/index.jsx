import Block from '../../components/block';
import MessageColumn from '../../components/message-column';
import Nav from '../../components/nav';
import PlayersColumn from '../../components/players-column';
import './index.css';

const Home = () => {
  return (
    <div className='body'>
        <Nav />
        <div className='main'>
        <PlayersColumn />
        <div className='blocks'>
            <Block title='Equipa 1#' teams={[{name: 'Jogador 1'}, {name: 'Jogador 2'}]} color="#509494" />
            <Block title='Equipa 2#' teams={[{name: 'Jogador 1'}, {name: 'Jogador 2'}]}  color="#d3d061"/>
            <Block title='Equipa 3#' teams={[{name: 'Jogador 1'}, {name: 'Jogador 2'}]}  color="#66a257"/>
            <Block title='Equipa 4#' teams={[{name: 'Jogador 1'}, {name: 'Jogador 2'}]}  color="#945250"/>
        </div>
        <MessageColumn />
        </div>

    </div>
  );
}

export default Home;
