import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { abrirContacto } from '../../actions/contactoActions';

export const CuadroAzul = () =>{

    const dispatch = useDispatch();

    const empezarProyecto = () => {
        dispatch( abrirContacto() );
    }

    return(
        <>
            <div className="colaborar-container">
                <div className="cuadro-azul col-12 col-md-11 col-xl-10">
                    <h3>¿Listo para colaborar?</h3>
                    <div className="texto-boton">
                        <p>
                            ¡Nos encantará 
                            trabajar contigo! Déjanos tus datos, nos 
                            pondremos en contacto contigo y podremos 
                            resolver todas tus preguntas.
                        </p>
                        <span className="btn-empezar-proyecto" onClick={() => empezarProyecto()}>
                            Empezar proyecto
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}   