import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

export const ServiciosItem1 = (props) =>{
    const {lista,dropDownMenu} = props;
    return(

        <div className="serviciosItem lineMenu" >
            <div className="serviciosMenu" >
                <div className="serviciosMenuTitulo" >Contabilida de personas físicas y morales</div>
                {dropDownMenu ===1 ? 
                    <div className="serviciosMenuIconoCirculoDespliege" onClick={e=>lista(e,1)}>         
                        <RiArrowUpLine className="serviciosMenuIconoDespliege" />
                    </div>
                    :
                    <div className="serviciosMenuIconoCirculo" onClick={e=>lista(e,1)}>         
                        <RiArrowDownLine className="serviciosMenuIcono" />
                    </div>
                }
            </div>            
            { dropDownMenu ===1 ? 
                <div className="serviciosMenuContenido lineMenuTop">
                    <div className="serviciosMenuContenidoTexto">
                        <p>
                            Todo ente económico debe poseer una contabilidad veraz, sólida, y
                            capaz de respaldar información financiera confiable y relevante que
                            pueda ser usada para tomar decisiones que definan el rumbo y la
                            permanencia del negocio a lo largo del tiempo. Esta información,
                            también es utilizada para determinar el correcto cumplimiento de
                            diferentes obligaciones.
                        </p>
                        <p>
                            Asegúrate de que la contabilidad de tu empresa se apegue a la
                            normatividad financiera aplicable y cuente con los estados financieros
                            adecuados, evita contratiempos y protege tu negocio.
                        </p>
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">1</div>
                            <div className="menuListaNombre">Estado de situación financiera </div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">2</div>
                            <div className="menuListaNombre">Estado de resultado integral</div>
                        </div>  
                        <div className="menuListaItem lineMenu">
                            <div className="menuListaNumero">3</div>
                            <div className="menuListaNombre" >Estado de flujos de efectivo</div>
                        </div>  
                        <div className="menuListaItem">
                            <div className="menuListaNumero">4</div>
                            <div className="menuListaNombre">Estado de cambios en el capital contable</div>
                        </div>    
                    </div>              
                </div>
                :<span></span>
            }
        </div>
    );
}