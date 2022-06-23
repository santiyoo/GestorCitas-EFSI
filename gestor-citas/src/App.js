import './App.css';
import ListadoCitas from './components/ListadoCitas';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <Formulario/>
            <ListadoCitas/>
          </div>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
