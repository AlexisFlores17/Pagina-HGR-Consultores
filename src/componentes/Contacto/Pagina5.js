import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setTipoPersona } from '../../actions/contactoActions';

export const Pagina5 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setPersona = (value) => {
        dispatch( setTipoPersona(value) );
        siguiente(value);
    }

    const siguiente = (value) => {
        if (value === "moral") {
            dispatch( cambiarPagina( 51 ) );
        }else{
            dispatch( cambiarPagina( 52 ) );
        }
    }

    const anterior = () => {
        if( state.areaAyuda === "fiscal"){
            dispatch( cambiarPagina( 41 ) );
        } else if ( state.areaAyuda === "financiera" ){
            dispatch( cambiarPagina( 42 ) );
        }else{
            dispatch( cambiarPagina( 4 ) );
        }
    }

    return (
        <span>
            <p className="pregunta">
                {state.pagina} -{`>`} ¿Qué tipo de persona eres?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setPersona("moral") }>
                    Persona moral { state.tipoPersona === "moral" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("fisica") }>
                    Persona física { state.tipoPersona === "fisica" && <i><HiCheckCircle /></i> }
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
