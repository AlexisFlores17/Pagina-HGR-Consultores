import React from 'react';
import { useDispatch } from 'react-redux';
import { abrirContacto } from '../actions/contactoActions';
import {Header} from './Header'
import Pictures from "./Pictures";

export const Inicio = () =>{

    const dispatch = useDispatch();

    const clickContacto = () => {
        dispatch( abrirContacto() )
    }

    return(
        <div className="inicio" >
            <div className="container" >
                <div className="wrapper" >
                    <div className="home">
                        <Pictures />
                        <div className="content" >
                            <h5>
                                Servicios y asesoría 
                                contable, fiscal y 
                                financiera
                            </h5>
                            <div className="bottom-line">
                                <div className="line"></div>
                                <div className="contact" onClick={() => clickContacto()}>CONTACTO</div>
                            </div>                                                
                        </div>                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}