import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem4 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Elaboración de proyectos financieros
</div>
                {dropDownMenu ===4 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,4)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,4)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===4 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                        ¿Tienes	un	nuevo	proyectode	inversióno	necesitas	presupuestarlos	resultados	 de	 tu	 actual	 proyecto?Organiza	 los	 recursos	 humanos,	materiales	y	financieros	con	los	que	cuentas	para	llegar	a	los	objetivos	y	 metas	de	 este.
                        </p>
                        <p>
                        Conoce	las	 diferentes	razonesfinancieras	de	 tu	proyecto,	las	tasas	de	descuento,	el	valor	presente	neto,	entre	algunos	otros	indicadores	que	podrán	determinar	el	rumbo del negocio
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Inicia:	Crea	o	cubre	una	necesidad </div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Planea:	Establece	las	estrategias	y	acciones</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre" >Ejecuta</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">4</div>
                            <div className="menuListaNombre" >Organiza y dirige</div>
                        </div>  
                        <div className="menuListaItem">
                            <div className="menuListaNumero">5</div>
                            <div className="menuListaNombre">Controla</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}