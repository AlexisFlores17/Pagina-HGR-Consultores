import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem7 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Planeación financiera y fiscal</div>
                {dropDownMenu ===7 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,7)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,7)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===7 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                        Para poder	tener	mejores	resultados	y	una	permanencia	mucho	más	sólida	en	el	mercado,	las	empresas	necesitan	una	correcta	planeación.	En	la	parte	financiera,	protege	tus	recursos conociendo	los	escenarios	pesimistas,	realistas	y	optimistas	del	mercado.	Estableciendo en	cada	periodo	 una	 rentabilidad,	 liquidez	 y	 solvencia	 mínima	 esperada.	Asegúrate de	 conocer	 tus	ciclos de	 cobro	 y	 de	 pago, haciendo	 más	eficientes	tus	recursos.	
                        </p>
                        <p>
                        En	la	parte	fiscal, conoce y planea los	impuestos	que	vas	a	pagar	en	cada	periodo	del	año, así	como	en	el	ejercicio	completo.	Protege	así	la	liquidez	 del	 negocio,	creando	 estrategias	 que	 te	 permitan	 pagar lo	justo	a	las	autoridades e	incluso,	tener	saldos	a favor.
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Cultura preventiva </div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Mitigación de riesgos</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre" >Control de liquidez</div>
                        </div>  
                        <div className="menuListaItem">
                            <div className="menuListaNumero">4</div>
                            <div className="menuListaNombre">Eficiencia de recursos financieros</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}