import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setAreaAyuda2 } from '../../actions/contactoActions';

export const Pagina42 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setArea = (value) => {
        dispatch( setAreaAyuda2(value) );
        siguiente();
    }

    const siguiente = () => {
        dispatch( cambiarPagina( 5 ) );
    }

    const anterior = () => {
        dispatch( setAreaAyuda2("") );
        dispatch( cambiarPagina( 4 ) );
    }

    return (
        <span>
            <p className="pregunta">
                4.1 -{`>`} ¿En qué área <span className="bold">financiera</span> te podemos ayudar?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setArea("inversion") }>
                    Elaboración de proyectos de inversión y/o presupuestos { state.areaAyuda2 === "inversion" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("valuacion") }>
                    Valuación { state.areaAyuda2 === "valuacion" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("otro") }>
                    Otro { state.areaAyuda2 === "otro" && <i><HiCheckCircle /></i> }
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
