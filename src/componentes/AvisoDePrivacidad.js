import React from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

export const AvisoDePrivacidad = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.contactoReducer)

    const cerrar = () => {
        console.log(cerrar);
    }

    return (
        <div className="avisoDePrivacidadContainer">
            <div className="btn-cerrar">
                <span onClick={() => cerrar()} className="cerrar-icon">
                    <MdClose />
                </span>
            </div>
            <div className="contacto-content">
                <h1>Aviso de privacidad</h1>
            </div>
        </div>
    )
}
