import React from 'react';
import { ServiciosContenido } from './ServiciosComponentes/ServiciosContenido';
import { ServiciosQuote } from './ServiciosComponentes/ServiciosQuote';

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