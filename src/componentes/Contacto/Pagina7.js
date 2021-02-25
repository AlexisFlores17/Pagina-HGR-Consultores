import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { cambiarPagina, reset } from '../../actions/contactoActions';
import swal from 'sweetalert';


export const Pagina7 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const enviar = () => {
        dispatch( reset() );
    }

    const anterior = () => {
        if (state.tipoPersona2 === "mercantil") {
            dispatch( cambiarPagina( 61 ) );
        } else if( state.tipoPersona2 === "otro"){
            dispatch( cambiarPagina( 62 ) );
        } else if ( state.residencia === "mexico"){
            dispatch( cambiarPagina( 63 ) );
        } else if ( state.residencia === "extranjero"){
            dispatch( cambiarPagina( 52 ) );
        } else{
            dispatch( cambiarPagina( 51 ) );
        }
    }

    return (
        <span>
            <p className="pregunta pregunta-final">
                Muchas gracias {state.nombre}, da click en enviar para poder ponernos en contacto con usted
            </p>
            <div className="btn-siguiente siguiente-anterior">
                <span className="btn-siguiente-span" onClick={() => anterior()}>
                    <HiArrowNarrowLeft />
                </span>
                <span className="btn-siguiente-span btn-enviar" onClick={() => enviar()}>
                    Enviar
                </span>
            </div>
        </span>
    )
}
