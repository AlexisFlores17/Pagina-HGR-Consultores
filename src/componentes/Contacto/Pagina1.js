import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";

import { HiArrowNarrowRight} from "react-icons/hi";
import { setNombre, cambiarPagina } from '../../actions/contactoActions';
import swal from 'sweetalert';


export const Pagina1 = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.contactoReducer)
    const initialForm = {
        nombre: state.nombre,
    }
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const siguiente = () => {

        if(formValues.nombre !== ""){
            dispatch( setNombre(formValues.nombre));
            dispatch( cambiarPagina( state.pagina + 1 ));
        } else {
            swal ( "Campo vacío" ,  "Por favor llene el campo de nombre" ,  "warning")
        }
        
    }

    return (
        <span>
            <p className="pregunta">
                {state.pagina} -{`>`} Buen día, ¿Cuál es su nombre?  
            </p>
            <input type="text" name="nombre" autoComplete="off" value={formValues.nombre} onChange={handleInputChange} className="contacto-input-text" placeholder="Escriba su nombre..."/>
            <div className="btn-siguiente">
                <span className="btn-siguiente-span" onClick={() => siguiente()}>
                    <HiArrowNarrowRight />
                </span>
            </div>
        </span>
    )
}
