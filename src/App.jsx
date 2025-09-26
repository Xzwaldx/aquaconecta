import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Aquaconecta</h1>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/Registration">Registro</Link> |{" "}
        <Link to="/Usage">Uso</Link>
      </nav>
    </div>
  );
}

export default App;
