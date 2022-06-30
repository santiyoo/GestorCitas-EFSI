import './App.css';
import React, {useState, useEffect} from 'react';
import ListadoCitas from './components/ListadoCitas';
import Formulario from './components/Formulario';
import Cita from './components/Cita'

function App() {
  const [citas, setCitas] = useState([])

  const eliminarCita = id => {
    const nuevo = citas.filter(cita => cita.id !== id);
    setCitas(nuevo);
  }

  const titulo = citas.length ? 'Administra tus citas' : 'No hay citas';

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className='container'>
        <div className='row'>
          <div className='column one-half'>
            <Formulario citas={citas} setCitas={setCitas}/>
          </div>
          <div className='column one-half'>
            <h2>{titulo}</h2>
            <ListadoCitas citas={citas} eliminarCita={eliminarCita}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
