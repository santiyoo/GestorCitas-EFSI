import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCita}) => {
  const [cita, setCita] = useState({});
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const setState = event => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value
    })
  }

  // State para errores de formulario
  const [ error, setError ] = useState(false);

  // Cuando se envía el formulario para agregar una cita
  const submitCita = event => {
    event.preventDefault();

    // 1. Validar
    if ( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
      setError(true);
      return;
    }

    // 2. Asignar un ID único a la cita
    cita['id'] = uuid();

    // 3. Crear la cita y añadirla al state principal de la app
    crearCita(cita);

    // 4. Reiniciar form
    setCita({})
  }

  return (
    <>
      <h2>Crear cita</h2>
      <form onSubmit = {submitCita}>
        <label>Nombre Mascota</label>
        <input type='text' name='mascota' className='u-full-width' placeholder='Nombre Mascota' onChange={setState} value={mascota} required/>
        <label>Nombre Dueño</label>
        <input type='text' name='propietario' className='u-full-width' placeholder='Nombre del dueño de la mascota' onChange={setState} value = {propietario} required/>
        <label>Fecha</label>
        <input type='date' name='fecha' className='u-full-width' onChange={setState} value={fecha} required/>
        <label>Hora</label>
        <input type='time' name='hora' className='u-full-width' onChange={setState} value={hora} required/>
        <label>Síntomas</label>
        <textarea className='u-full-width' name='sintomas' onChange={setState} value={sintomas} required></textarea>

        <button type='submit' className='u-full-width button-primary'>Agregar Cita</button>
      </form>
    </>
  )
}

export default Formulario;