import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cerrarContacto } from '../actions/contactoActions';
import { MdClose } from "react-icons/md";
import { Pagina1 } from './Contacto/Pagina1';
import { Pagina2 } from './Contacto/Pagina2';
import { Pagina3 } from './Contacto/Pagina3';

export const Contacto = () =>{

    const dispatch = useDispatch();
    const state = useSelector(state => state.contactoReducer)
    

    const selectPage = () => {
        switch (state.pagina) {
            case 1:
                return <Pagina1 />
            case 2: 
                return <Pagina2 />
            case 3: 
                return <Pagina3 />
            default:
                return <Pagina1 />
        }
    }

    const cerrar = () => {
        dispatch( cerrarContacto() );
    }
    

    return(
        <div className="contacto-container">
            <div className="btn-cerrar">
                <span onClick={() => cerrar()} className="cerrar-icon">
                    <MdClose />
                </span>
            </div>
            <div className="contacto-content">
                { selectPage() }
            </div>
        </div>
    );
}