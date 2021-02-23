import React from 'react';
import {Header} from './Header'
import Pictures from "./Pictures";
export const Inicio = () =>{

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
                                <div className="contact">CONTACTO</div>
                            </div>                                                
                        </div>                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}