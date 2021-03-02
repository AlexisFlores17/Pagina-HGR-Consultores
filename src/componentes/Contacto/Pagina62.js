import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setTipoPersona3 } from '../../actions/contactoActions';

export const Pagina62 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setPersona = (value) => {
        dispatch( setTipoPersona3(value) );
        siguiente();
    }

    const siguiente = () => {
        dispatch( cambiarPagina( 71 ) );
    }

    const anterior = () => {
        dispatch( setTipoPersona3("") );
        dispatch( cambiarPagina( 51 ) );
    }

    return (
        <span>
            <p className="pregunta">
                6 -{`>`} Selecciona una opción
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setPersona("fideicomiso") }>
                    Fideicomiso { state.tipoPersona3 === "fideicomiso" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("participacion") }>
                    Asociación en participación { state.tipoPersona3 === "participacion" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("otro") }>
                    Otro { state.tipoPersona3 === "otro" && <i><HiCheckCircle /></i> }
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
