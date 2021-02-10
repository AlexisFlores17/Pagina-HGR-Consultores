import React from 'react';
import { IoArrowDownCircleSharp } from "react-icons/io5";

export const ServiciosContenido = () =>{

    return(
      
        <div className="serviciosContenido">
            <div className="serviciosItem" >
                <div className="serviciosMenu" >
                    <div>Contabilida de personas físicas y morales</div>
                    <IoArrowDownCircleSharp />
                </div>
                <div className="serviciosMenuContenido">
                    <div className="serviciosMenuContenidoTexto">
                        Todo ente económico debe poseer una contabilidad veraz, sólida, y
                        capaz de respaldar información financiera confiable y relevante que
                        pueda ser usada para tomar decisiones que definan el rumbo y la
                        permanencia del negocio a lo largo del tiempo. Esta información,
                        también es utilizada para determinar el correcto cumplimiento de
                        diferentes obligaciones.
                        Asegúrate de que la contabilidad de tu empresa se apegue a la
                        normatividad financiera aplicable y cuente con los estados financieros
                        adecuados, evita contratiempos y protege tu negocio.
                    </div>  
                    <div className="serviciosMenuContenidoLista">
                        <div className="MenuListaItem">
                            <div></div>
                            <div></div>
                        </div>  
                        <div className="MenuListaItem">
                            <div></div>
                            <div></div>
                        </div>  
                        <div className="MenuListaItem">
                            <div></div>
                            <div></div>
                        </div>  
                        <div className="MenuListaItem">
                            <div></div>
                            <div></div>
                        </div>    
                    </div>              
                </div>
            </div>
        </div>
    );
}