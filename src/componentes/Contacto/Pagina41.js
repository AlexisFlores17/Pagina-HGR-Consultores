import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowRight} from "react-icons/hi";
import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setAreaAyuda2 } from '../../actions/contactoActions';

export const Pagina41 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setArea = (value) => {
        dispatch( setAreaAyuda2(value) );
    }

    const siguiente = () => {
        dispatch( cambiarPagina( 5 ) );
    }

    const anterior = () => {
        dispatch( cambiarPagina( 4 ) );
    }

    return (
        <span>
            <p className="pregunta">
                4.1 -{`>`} ¿En qué área <span className="bold">fiscal</span> te podemos ayudar?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setArea("regularizacion") }>
                    Regularización { state.areaAyuda2 === "regularizacion" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("impuestos") }>
                    Devoluciones de impuestos { state.areaAyuda2 === "impuestos" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("planeacion") }>
                    Planeación { state.areaAyuda2 === "planeacion" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("otro") }>
                    Otro { state.areaAyuda2 === "otro" && <i><HiCheckCircle /></i> }
                </div>
            </div>
            <div className="btn-siguiente siguiente-anterior">
                <span className="btn-siguiente-span" onClick={() => anterior()}>
                    <HiArrowNarrowLeft />
                </span>
                <span className="btn-siguiente-span" onClick={() => siguiente()}>
                    <HiArrowNarrowRight />
                </span>
            </div>
        </span>
    )
}
