import React from 'react';
import { ServiciosContenido } from './ServiciosComponentes/ServiciosContenido';
import { ServiciosQuote } from './ServiciosComponentes/ServiciosQuote';

export const Servicios = () =>{

    return(
        <div className="serviciosMain" id="servicios">
            <div className="serviciosTitulo">
                Servicios
            </div>
            <ServiciosContenido />
            <ServiciosQuote />
        </div>
    );
}