import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cerrarContacto } from '../actions/contactoActions';
import { MdClose } from "react-icons/md";
import { Pagina1 } from './Contacto/Pagina1';
import { Pagina2 } from './Contacto/Pagina2';
import { Pagina3 } from './Contacto/Pagina3';
import { Pagina4 } from './Contacto/Pagina4';
import { Pagina41 } from './Contacto/Pagina41';
import { Pagina42 } from './Contacto/Pagina42';
import { Pagina5 } from './Contacto/Pagina5';
import { Pagina51 } from './Contacto/Pagina51';
import { Pagina52 } from './Contacto/Pagina52';
import { Pagina61 } from './Contacto/Pagina61';
import { Pagina62 } from './Contacto/Pagina62';
import { Pagina63 } from './Contacto/Pagina63';
import { Pagina7 } from './Contacto/Pagina7';

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
            case 4: 
                return <Pagina4 />
            case 41: 
                return <Pagina41 />
            case 42: 
                return <Pagina42 />
            case 5: 
                return <Pagina5 />
            case 51: 
                return <Pagina51 />
            case 52: 
                return <Pagina52 />
            case 61: 
                return <Pagina61 />
            case 62: 
                return <Pagina62 />
            case 63: 
                return <Pagina63 />
            case 7: 
                return <Pagina7 />
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