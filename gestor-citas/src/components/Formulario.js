import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({citas, setCitas}) => {
  const [cita, setCita] = useState({
    mascota: '',
    nombre: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })
  const { mascota, nombre, fecha, hora, sintomas } = cita

  const setState = event => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value
    })
  }

  const [ error, setError ] = useState(false);

  function guardarCita(e){
    e.preventDefault()
    
    if ( mascota.trim() === '' || nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
      setError(true);
      return;
    }
    
    setError(false);
    
    cita['id'] = uuid();
    
    setCitas(citas => [...citas, cita])

    setCita({
      mascota: '',
      nombre: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <>
      <h2>Crear cita</h2>
      {
        error
        ? <p className='alerta-error'>Todos los campos son obligatorios</p>
        : null
      }
      <form>
        <label>Nombre Mascota</label>
        <input type='text' name='mascota' className='u-full-width' placeholder='Nombre Mascota' value={mascota} onChange={setState} required/>
        <label>Nombre Dueño</label>
        <input type='text' name='nombre' className='u-full-width' placeholder='Nombre del dueño de la mascota' value={nombre} onChange={setState} required/>
        <label>Fecha</label>
        <input type='date' name='fecha' className='u-full-width'  value={fecha} onChange={setState} required/>
        <label>Hora</label>
        <input type='time' name='hora' className='u-full-width' value={hora} onChange={setState} required/>
        <label>Síntomas</label>
        <textarea className='u-full-width' name='sintomas' value={sintomas} onChange={setState} required></textarea>

        <button type='submit' className='u-full-width button-primary' onClick={guardarCita}>Agregar Cita</button>
      </form>
    </>
  )
}

export default Formulario;