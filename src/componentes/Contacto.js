import React from 'react';
import { useDispatch } from 'react-redux';
import { cerrarContacto } from '../actions/contactoActions';
import { GrClose } from "react-icons/gr";

export const Contacto = () =>{

    const dispatch = useDispatch();

    const cerrar = () => {
        dispatch( cerrarContacto() );
    }

    return(
        <div className="contacto-container">
            <div className="btn-cerrar">
                <span onClick={() => cerrar()} className="cerrar-icon">
                    <GrClose />
                </span>
            </div>
        </div>
    );
}