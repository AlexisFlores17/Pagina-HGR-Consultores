import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setTipoPersona3 } from '../../actions/contactoActions';

export const Pagina63 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setPersona = (value) => {
        dispatch( setTipoPersona3(value) );
        siguiente();
    }

    const siguiente = () => {
        dispatch( cambiarPagina( 7 ) );
    }

    const anterior = () => {
        dispatch( setTipoPersona3("") );
        dispatch( cambiarPagina( 52 ) );
    }

    return (
        <span>
            <p className="pregunta">
                6 -{`>`} Selecciona una opción
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setPersona("empresarial") }>
                    Actividad empresarial { state.tipoPersona3 === "empresarial" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("profesionales") }>
                    Servicios profesionales { state.tipoPersona3 === "profesionales" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("rif") }>
                    Régimen de incorporación fiscal { state.tipoPersona3 === "rif" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("digitales") }>
                    Plataformas digitales { state.tipoPersona3 === "digitales" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("sueldos") }>
                    Sueldos y salarios/Asimilado a salarios { state.tipoPersona3 === "sueldos" && <i><HiCheckCircle /></i> }
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
