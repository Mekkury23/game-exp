import "./index.css";

const players = [
  { name: "Jogador 1", team: 1 },
  { name: "Jogador 1", team: 1 },
  { name: "Jogador 1", team: 1 },
  { name: "Jogador 1", team: 1 },
  { name: "Jogador 1", team: 1 },
];

const PlayersColumn = () => (
  <div className="players-column">
    <div className="header">
    <span>Jogadores da sessao</span>
    </div>
    <div className="players-list">
      <div className="title">
        <span className="title-team">Equipa</span>
        <span className="title-player">Jogador</span>
      </div>
      {players.map((player, index) => (
        <div className="player" key={index}>
          <div className="player-team">{player.team}</div>
          <div className="player-name">{player.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default PlayersColumn;
