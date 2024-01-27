import "./index.css";

const PhasesColumn = () => (
  <div className="phases-column">
    <div className="header">
      <span>Fase 3</span>
      <span>Mapa da jornada</span>
    </div>
    <div className="phases-list">
      <div className="row">
        <p className="number">10</p>
        <p>Escala do Produto</p>
      </div>
      <div className="cost">
        <p>Custo Mensal</p>
      </div>
      <p className="credit">Saldo</p>
      <div className="row">
        <p className="credit-circle">?</p>
        <div>
          <p>??</p>
          <p>??</p>
          <p>??</p>
        </div>
      </div>
        <p>Rastreamento</p>
        <p>Meses percorridos 30</p>
        <p>Vel da Startup Rápida</p>
    </div>
  </div>
);

export default PhasesColumn;
