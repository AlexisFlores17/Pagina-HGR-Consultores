import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem5 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Valuación de empresas</div>
                {dropDownMenu ===5 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,5)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,5)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===5 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                        Todas	 las	 empresas	 cuentan	 con	 un	 historial,	 activos	 fijos,	 activos	intangibles,	protección	 industrial, beneficios	 económicos	 esperados, riesgos	 esperados, entre	 algunos	 otros	 factores	 dentro	 de	 la	información	financiera que	pueden	generar	una	variación	importante	del	valor de	mercado que	tiene la	organización,	ya	sea	para	adquirir capital	o	para	ser	vendida a	un	tercero.
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Flujos de efectivo descontados </div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Múltiplos</div>
                        </div>  
                        <div className="menuListaItem">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre">Activos intangibles</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}