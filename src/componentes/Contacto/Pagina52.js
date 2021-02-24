import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setResidencia } from '../../actions/contactoActions';

export const Pagina52 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setPersona = (value) => {
        dispatch( setResidencia(value) );
        siguiente(value);
    }

    const siguiente = (value) => {
        if( value === "mexico"){
            dispatch( cambiarPagina( 63 ) );
        }else{
            dispatch( cambiarPagina(7) );
        }
    }

    const anterior = () => {
        dispatch( setResidencia("") );
        dispatch( cambiarPagina( 5 ) );
    }

    return (
        <span>
            <p className="pregunta">
                5.1 -{`>`} ¿En dónde resides?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setPersona("mexico") }>
                    Residente en México { state.residencia === "mexico" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("extranjero") }>
                    Residente en el extranjero { state.residencia === "extranjero" && <i><HiCheckCircle /></i> }
                </div>
            </div>
            <div className="btn-siguiente siguiente-anterior">
                <span className="btn-siguiente-span" onClick={() => anterior()}>
                    <HiArrowNarrowLeft />
                </span>
            </div>
        </span>
    )
}
