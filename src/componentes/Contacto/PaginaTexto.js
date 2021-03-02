import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";

import { HiArrowNarrowRight, HiArrowNarrowLeft} from "react-icons/hi";
import { setNotas, cambiarPagina } from '../../actions/contactoActions';


export const PaginaTexto = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.contactoReducer)
    const initialForm = {
        notas: state.notas,
    }
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const siguiente = () => {

        dispatch( setNotas(formValues.notas) )
        dispatch( cambiarPagina( 7 ));
        
    }
    
    const anterior = () => {
        // if( state.conozcoSituacion === false ){
        //     dispatch( cambiarPagina(3));
        // }

        if (state.tipoPersona2 === "mercantil") {
            dispatch( cambiarPagina( 61 ) );
        } else if( state.tipoPersona2 === "otro"){
            dispatch( cambiarPagina( 62 ) );
        } else if ( state.residencia === "mexico"){
            dispatch( cambiarPagina( 63 ) );
        } else if ( state.residencia === "extranjero"){
            dispatch( cambiarPagina( 52 ) );
        } else if ( state.conozcoSituacion === false){
            dispatch( cambiarPagina( 3 ) );
        } else{
            dispatch( cambiarPagina( 51 ) );
        }
    }

    return (
        <span>
            <p className="pregunta">
                Cuéntanos ¿Cómo te podemos ayudar?
            </p>
            <textarea name="notas" autoComplete="off" value={formValues.notas} onChange={handleInputChange} className="contacto-input-text contacto-notas" placeholder="Texto..." wrap="hard" />
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
