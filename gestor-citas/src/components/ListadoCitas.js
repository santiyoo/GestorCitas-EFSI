import React, { useState } from 'react'
import Cita from './Cita'

export default function ListadoCitas() {
    const [listadoCitas, setListadoCitas]=useState([])
    return (
        <Cita/>
    )
}
