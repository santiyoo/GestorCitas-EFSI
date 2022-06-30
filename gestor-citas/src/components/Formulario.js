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

  function guardarCita(e){
    e.preventDefault()
    setCitas(citas => [...citas, cita])

    cita['id'] = uuid();

    setCita({
      mascota: '',
      nombre: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  console.log(citas)

  return (
    <>
      <h2>Crear cita</h2>
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