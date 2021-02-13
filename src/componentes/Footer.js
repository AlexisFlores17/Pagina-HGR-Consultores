import React from 'react';

export const Footer = () =>{

    return(
        <div className="footerContenedor">
            <div className="footerParteSuperior" >
                <div className="footerSocial" >
                    <div className="social">Social</div>
                    <div className="redesContenido">
                        <div className="redes" >Linkedin</div>
                        <div className="redes" >Youtube</div>
                        <div className="redes" >Spotify</div>
                        <div className="redes" >Facebook</div>
                    </div>
                </div>
                <div className="footerContacto" >
                    <div className="footerContactoContenido">
                        <div className="contacto">Contacto</div>
                        <div className="datos" >info@hgrconsultores.com.mx</div>
                        <div className="datos" >55 61725993</div>
                    </div>
                </div>
                <div className="footerOficina" >
                    <div className="footerOficinaContenido" >
                        <div className="oficina" >Oficina</div>
                        <div className="direccion">Enrique Rébsamen  512</div>
                        <div className="direccion">Colonia Narvarte Poniente</div>
                        <div className="direccion">C.P. 03020 Alcaldía</div>
                        <div className="direccion">Benito Juárez</div>
                        <div className="direccion">Ciudad de México</div>
                        
                    </div>
                </div>
            </div>
            <div className="footerParteInferior" >
                <div className="footerEmpresa" >&copy; 2021 LSD Lab </div>
                <div className="footerAvisoPrivacidad" > Aviso de Privacidad</div>
            </div>
        </div>
    );
}