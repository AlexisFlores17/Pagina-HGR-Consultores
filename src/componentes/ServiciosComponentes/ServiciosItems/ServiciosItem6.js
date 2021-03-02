import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem6 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Asesoría y revisión</div>
                {dropDownMenu ===6 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,6)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,6)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===6 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                            Robustece la contabilidad y los impuestos 
                            de tu empresa, resuelve las dudas que tienen 
                            tus contadores relacionadas con normatividad 
                            contable y legislación fiscal. Gracias a este 
                            control, podrás asegurarte de que todo se esté 
                            registrando y enterando de manera correcta y 
                            así, también estarás evitando sanciones por 
                            parte de las autoridades
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Revisión contable</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Revisión fiscal</div>
                        </div>  
                        <div className="menuListaItem">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre">Control</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}