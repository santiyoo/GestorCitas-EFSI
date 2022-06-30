import React from 'react';
import Cita from './Cita'

export default function ListadoCitas({citas, eliminarCita}) {   
    return (
        <>
            {citas.map((x)=>{
                return(
                <Cita cita={x} eliminarCita={eliminarCita}/>   
                )
            })}
        </>
    )
}

