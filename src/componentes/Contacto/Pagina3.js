import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setConozcoSituacion } from '../../actions/contactoActions';

export const Pagina3 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setSituacion = (value) => {
        dispatch( setConozcoSituacion(value) );
        siguiente( value );
    }

    const siguiente = (value) => {
        if (value) {
            dispatch( cambiarPagina( 4 ) );
        } else {
            dispatch( cambiarPagina( 71 ))
        }
    }

    const anterior = () => {
        dispatch( cambiarPagina( 2 ) );
    }

    return (
        <span>
            <p className="pregunta">
                {state.pagina} -{`>`} Seleccione una opción 
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setSituacion(true) }>
                    Conozco mi situación { state.conozcoSituacion && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setSituacion(false) }>
                    No conozco mi situación { !state.conozcoSituacion && <i><HiCheckCircle /></i> }
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
