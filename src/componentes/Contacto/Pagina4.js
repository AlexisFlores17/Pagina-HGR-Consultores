import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowRight} from "react-icons/hi";
import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { cambiarPagina, setAreaAyuda } from '../../actions/contactoActions';

export const Pagina4 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const setArea = (value) => {
        dispatch( setAreaAyuda(value) );
    }

    const siguiente = () => {
        if( state.areaAyuda === "fiscal"){
            dispatch( cambiarPagina( 41 ) );
        } else if ( state.areaAyuda === "financiera" ){
            dispatch( cambiarPagina( 42 ) );
        }else{
            dispatch( cambiarPagina( 5 ) );
        }
    }

    const anterior = () => {
        dispatch( cambiarPagina( 3 ) );
    }

    return (
        <span>
            <p className="pregunta">
                {state.pagina} -{`>`} ¿En qué área te podemos ayudar?
            </p>
            <div className="opciones-container">
                <div className="opcion" onClick={ () => setArea("contable") }>
                    Contable { state.areaAyuda === "contable" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("fiscal") }>
                    Fiscal { state.areaAyuda === "fiscal" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("financiera") }>
                    Financiera { state.areaAyuda === "financiera" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("nomina/ss") }>
                    Nómina y/o seguridad social { state.areaAyuda === "nomina/ss" && <i><HiCheckCircle /></i> }
                </div>
                <div className="opcion" onClick={ () => setArea("otro") }>
                    Otro { state.areaAyuda === "otro" && <i><HiCheckCircle /></i> }
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
