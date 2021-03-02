import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem3 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Cálculo de nóminas y contribuciones de seguridad social</div>
                {dropDownMenu ===3 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,3)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,3)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===3 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                        Si	bien	la	mayoría	de	las	personas tiene	identificado	al	SAT	como	un	ente	al	que	hay	que	tenerle cuidado	e	incluso	miedo,	es	el	IMSS	el	que puede	superar	cualquier	expectativa.
                        </p>
                        <p>
                        Toda	empresa	o	persona	física	que	tenga	empleados	debe	de	calcular	y	enterar	de	manera	perfecta	todas	sus	obligaciones	en	materia	laboral	y	de	seguridad	social.	Ten	la	certeza	 de	 que	 estás	 cumpliendo	con	 las	 mismas	 y	 evita	 problemas	para	 tu	 negocio como	pueden	 ser	demandas	 laborales o multas considerables.
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Enfermedades	y	maternidad </div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Invalidez	y	vida</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre" >Retiro,	cesantía	en	edad	avanzada y vejez</div>
                        </div> 
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">4</div>
                            <div className="menuListaNombre" >Guarderías	y	prestaciones	sociales</div>
                        </div>   
                        <div className="menuListaItem">
                            <div className="menuListaNumero">5</div>
                            <div className="menuListaNombre">Riesgos	de	trabajo</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}