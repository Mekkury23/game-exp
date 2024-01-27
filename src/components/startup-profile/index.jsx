import "./index.css";

const founders = [
  { name: "Ananias", techDiff: 'contratos digitais' },
  { name: "Ariclenes", techDiff: 'seguro de aluguel' },
];

const StartupColumn = () => (
  <div className="startup-column">
    <div className="header">
    <span>Perfil da startup</span>
    <span>Detalhes</span>
    </div>
    <div className="startup-list">
      <div className="title">
        <span className="title-team">Fundadores</span>
        <span className="title-player">Diferencial tecnológico</span>
      </div>
      {founders.map((player, index) => (
        <div className="player" key={index}>
          <div className="player-name">{player.name}</div>
          <div className="player-team">{player.techDiff}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StartupColumn;
