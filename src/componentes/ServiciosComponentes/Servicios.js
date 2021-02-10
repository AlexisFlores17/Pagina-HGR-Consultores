import React from 'react';
import { ServiciosContenido } from './ServiciosContenido';
import { ServiciosQuote } from './ServiciosQuote';

export const Servicios = () =>{

    return(
        <div className="serviciosMain">
            <div className="serviciosTitulo">
                Servicios
            </div>
            <ServiciosContenido />
            <ServiciosQuote />
        </div>
    );
}