import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";

import { HiArrowNarrowRight} from "react-icons/hi";
import { HiArrowNarrowLeft} from "react-icons/hi";
import { cambiarPagina, setCorreo } from '../../actions/contactoActions';
import swal from 'sweetalert';


export const Pagina2 = () => {

    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();
    const initialForm = {
        correo: state.correo,
    }
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const siguiente = () => {
        if(formValues.correo !== ""){
            dispatch( setCorreo(formValues.correo));
            dispatch( cambiarPagina( 3 ) );
        } else {
            swal ( "Campo vacío" ,  "Por favor llene el campo de correo" ,  "warning" )
        }
        
    }

    const anterior = () => {
        dispatch( cambiarPagina( 1 ) );
    }

    return (
        <span>
            <p className="pregunta">
                {state.pagina} -{`>`} Hola {state.nombre}, ¿Cuál es su correo electrónico?  
            </p>
            <input type="text" autoComplete="off" name="correo" value={formValues.correo} onChange={handleInputChange} className="contacto-input-text" placeholder="Escriba aquí su correo..."/>
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
