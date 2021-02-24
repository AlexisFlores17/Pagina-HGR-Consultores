import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem2 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo 2" >Declaración de impuestos federales y locales</div>
                {dropDownMenu ===2 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,2)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,2)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===2 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                        Es	una	realidad	que	lo	único	seguro	que	tenemos	es	la	muerte	y	los	impuestos...	y	muchos	le	tememos	más	a	los	impuestos.	Todo	 negocio	 debe estar	 blindado	 contra	las	 autoridades	 fiscales,	 y	esto	se	logra	únicamente	pagando	de	manera	correcta	y	oportuna	todo	aquel	 impuesto	 aplicable	al	 mismo	 negocio.¿Conozco	los	 impuestos	que	tengo	que	pagar	por	cada	operación	que	realizo?	¿Estaré	exento	de	pagar alguno?
                        </p>
                        <p>
                        Evita	recargos,	sanciones	y	multas	que	pueden	llevar	a	tu	negocio	a	la	bancarrota	y	a	tu	patrimonio	a	un	hundimiento	irreversible
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">	Declaraciones	mensuales </div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">	Declaración	anual</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre" >	Declaraciones	informativa</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">4</div>
                            <div className="menuListaNombre">Impuestos	federales	(IVA,	ISR,	IEPS	entre otros)</div>
                        </div>
                        <div className="menuListaItem">
                            <div className="menuListaNumero">5</div>
                            <div className="menuListaNombre">Impuestos	locales	(Nómina,	hospedaje,	entre	otros)</div>
                        </div>        
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}