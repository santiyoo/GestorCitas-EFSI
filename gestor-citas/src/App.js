import './App.css';
import React, {useState, useEffect} from 'react';
import ListadoCitas from './components/ListadoCitas';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
      citasIniciales = [];
    }

    // Array de todas las citas de la app
    const [ citas, guardarCitas ] = useState(citasIniciales);

    // Use Effect para realizar ciertas operaciones cuando el state cambie
    useEffect(() =>{
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if (citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas));
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
    }, [citas]);

    // Función que toma las citas actuales y agrega la nueva
    const crearCita = cita => {
      guardarCitas([...citas, cita ]);
    }

    // Función que elimina una cita por su ID
    const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas);
    }

    // Mensaje condicional
    const titulo = citas.length ? 'Administra tus citas' : 'No hay citas';

    return (
      <>
        <h1>Administrador de Pacientes</h1>

        <div className='container'>
          <div className='row'>
            <div className='column one-half'>
              <Formulario crearCita = {crearCita}/>
            </div>
            <div className='column one-half'>
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita key = {cita.id} cita = {cita} eliminarCita = {eliminarCita}/>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default App;
