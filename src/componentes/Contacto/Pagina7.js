import React,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HiArrowNarrowLeft} from "react-icons/hi";
import { cambiarPagina, reset } from '../../actions/contactoActions';
import swal from 'sweetalert';
import axios from 'axios';
import Loader from "react-loader-spinner";
import { getAreaAyuda, getAreaAyuda2, getTipoPersona, getTipoPersona2, getTipoPersona3, getResidencia } from '../../helpers/helpers'; 



export const Pagina7 = () => {

    const [enviando, setEnviando] = useState(false)
    const state = useSelector(state => state.contactoReducer)
    const dispatch = useDispatch();

    const enviar = async () => {

        setEnviando(true);

        try {
            const peticion = await axios({
                method: 'post',
                url: 'https://hgr-consultores-mailing.herokuapp.com/email',
                data: {
                    "nombre": state.nombre,
                    "correo": state.correo,
                    "conozcoSituacion": state.conozcoSituacion ? "Sí" : "No" ,
                    "areaAyuda": getAreaAyuda(state.areaAyuda),
                    "areaAyuda2": getAreaAyuda2(state.areaAyuda2),
                    "tipoPersona": getTipoPersona(state.tipoPersona),
                    "tipoPersona2": getTipoPersona2(state.tipoPersona2),
                    "tipoPersona3": getTipoPersona3(state.tipoPersona3),
                    "residencia": getResidencia(state.residencia),
                    "notas": state.notas
                }
            })

            if ( peticion.status === 200 ){
                swal('Correo enviado', '¡Gracias! Nos pondremos en contacto contigo lo más pronto posible', 'success');
                dispatch( reset() );
            } else {
                swal('¡Lo sentimos!', 'Algo salió mal, por favor inténtelo de nuevo más tarde', 'error');
                setEnviando(false)
            }
            
        } catch (error) {
            swal('¡Lo sentimos!', 'Algo salió mal, por favor inténtelo de nuevo más tarde', 'error');
            setEnviando(false)
        }

    }

    const anterior = () => {
        // if (state.tipoPersona2 === "mercantil") {
        //     dispatch( cambiarPagina( 61 ) );
        // } else if( state.tipoPersona2 === "otro"){
        //     dispatch( cambiarPagina( 62 ) );
        // } else if ( state.residencia === "mexico"){
        //     dispatch( cambiarPagina( 63 ) );
        // } else if ( state.residencia === "extranjero"){
        //     dispatch( cambiarPagina( 52 ) );
        // } else{
        //     dispatch( cambiarPagina( 51 ) );
        // }

        dispatch( cambiarPagina(71) );
    }

    return (
        <span>
            {
                enviando ? <Loader type="Circles" color="#FFF" height={80} width={80}/>
                : 
                <>
                    <p className="pregunta pregunta-final">
                        Muchas gracias {state.nombre}, da click en enviar para poder ponernos en contacto con usted
                    </p>
                    <div className="btn-siguiente siguiente-anterior">
                        <span className="btn-siguiente-span" onClick={() => anterior()}>
                            <HiArrowNarrowLeft />
                        </span>
                        <button disabled={enviando} className="btn-siguiente-span btn-enviar" onClick={() => enviar() }>
                            Enviar
                        </button>
                    </div>
                </>
            }
            
        </span>
    )
}
