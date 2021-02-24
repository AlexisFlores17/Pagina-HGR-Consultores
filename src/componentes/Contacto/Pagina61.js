import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setTipoPersona3 } from '../../actions/contactoActions';

export const Pagina61 = () => {

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
        dispatch( cambiarPagina( 51 ) );
    }

    return (
        <span>
            <p className="pregunta">
                6 -{`>`} ¿Qué tipo de <span className="bold">sociedad mercantil</span>?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setPersona("colectivo") }>
                    Sociedad en nombre colectivo { state.tipoPersona3 === "colectivo" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("comandita") }>
                    Sociedad en comandita simple { state.tipoPersona3 === "comandita" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("limitada") }>
                    Sociedad de responsabilidad limitada { state.tipoPersona3 === "limitada" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("acciones") }>
                    Sociedad en comandita por acciones { state.tipoPersona3 === "acciones" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("cooperativa") }>
                    Sociedad cooperativa { state.tipoPersona3 === "cooperativa" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setPersona("sas") }>
                    Sociedad por acciones simplificada { state.tipoPersona3 === "sas" && <i><HiCheckCircle /></i> }
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
